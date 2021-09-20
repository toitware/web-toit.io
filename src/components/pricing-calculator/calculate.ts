export type CalculationResult = {
  megaBytes: number;
  // The price without the free 100MB
  originalPrice: number;
  price: number;
  debugOutput: string;
};

type CalculateProps = {
  messagesInterval: number;
  connectsInterval: number;
  dataPoints: number;
  codeUpdatesInterval: number;
  firmwareUpdatesInterval: number;
  numberOfDevices: number;
};

export const calculate = ({
  messagesInterval,
  connectsInterval,
  dataPoints,
  codeUpdatesInterval,
  firmwareUpdatesInterval,
  numberOfDevices,
}: CalculateProps): CalculationResult => {
  const daysBetweenCodeUpdates = codeUpdatesInterval / 60 / 24;
  const daysBetweenFirmwareUpdates = firmwareUpdatesInterval / 60 / 24;

  const codeUpdateSizeBytes = 50 * 1024;
  const firmwareUpdateSizeBytes = 256 * 1024;

  const messagesOverheadBytes = 70;
  const connectOverheadBytes = 70;

  const flashEventsCapacity = 64 * 1024;
  const flashUsageLimit = 0.7; // Percentage
  const flashEncodingBlowupFactor = 4096 / (4096 - 300);
  const flashEncodingOverheadBytes = 32;

  const minutesBetweenMetricsFlushing = 60;

  const systemMetricsAverageSizeBytes = 233;
  const systemBootLogsAverageSizeBytes = 45;
  const systemConnectLogsAverageSizeBytes = 65;

  const daysPerMonth = 30;

  const messagesPerDay = (24 * 60) / messagesInterval;
  const averageMessageSizeBytes = dataPoints * 12;
  const messagesBetweenConnects = Math.floor(
    (flashEventsCapacity * flashUsageLimit) /
      ((messagesOverheadBytes + averageMessageSizeBytes) * flashEncodingBlowupFactor + flashEncodingOverheadBytes)
  );
  const messageDataPerDayKb = (messagesPerDay * (messagesOverheadBytes + averageMessageSizeBytes)) / 1024;

  const dataDrivenConnectsPerDay = connectsInterval == 0 ? 0 : messagesPerDay / messagesBetweenConnects;
  const enforcedConnectsPerDay = connectsInterval == 0 ? 0 : (24 * 60) / connectsInterval;
  const effectiveConnectsPerDay = Math.max(dataDrivenConnectsPerDay, enforcedConnectsPerDay);

  const bootSequencesPerDay = connectsInterval == 0 ? 0 : (24 * 60) / Math.min(messagesInterval, connectsInterval);
  const systemMetricsFlushesPerDay = (24 * 60) / minutesBetweenMetricsFlushing;
  const systemMetricsPerDayKb = systemMetricsFlushesPerDay * (systemMetricsAverageSizeBytes / 1024);
  const systemLogsPerDayKb =
    (bootSequencesPerDay * systemBootLogsAverageSizeBytes +
      effectiveConnectsPerDay * systemConnectLogsAverageSizeBytes) /
    1024;

  const messageDataPerMonth = (messageDataPerDayKb * daysPerMonth) / 1024;
  const codeUpdateDataPerMonth =
    ((daysPerMonth / daysBetweenCodeUpdates) * codeUpdateSizeBytes +
      (daysPerMonth / daysBetweenFirmwareUpdates) * firmwareUpdateSizeBytes) /
    (1024 * 1024);
  const connectOverheadPerMonth = (effectiveConnectsPerDay * connectOverheadBytes * daysPerMonth) / (1024 * 1024);
  const systemDataOverheadPerMonth = (daysPerMonth * (systemMetricsPerDayKb + systemLogsPerDayKb)) / 1024;

  const megaBytesPerDevice =
    messageDataPerMonth + codeUpdateDataPerMonth + connectOverheadPerMonth + systemDataOverheadPerMonth;
  const megaBytesTotal = megaBytesPerDevice * numberOfDevices;
  const price = Math.max(0, megaBytesTotal - 100) * 0.1;
  const originalPrice = Math.max(0, megaBytesTotal) * 0.1;

  const debug = `
  messages per day: ${messagesPerDay} 
  messages between connects: ${messagesBetweenConnects} 
  average message size (bytes): ${averageMessageSizeBytes} 
  message data per day (kb): ${messageDataPerDayKb} 

  data driven connects per day: ${dataDrivenConnectsPerDay} 
  enforced connects per day: ${enforcedConnectsPerDay} 
  effective connects per day: ${effectiveConnectsPerDay} 

  boot sequences per day: ${bootSequencesPerDay}
  system metrics flushes per day: ${systemMetricsFlushesPerDay}
  system metrics per day (kb): ${systemMetricsPerDayKb}
  system logs per day (kb): ${systemLogsPerDayKb}

  message data per month: ${messageDataPerMonth}
  code update data per month: ${codeUpdateDataPerMonth}
  connect overhead per month: ${connectOverheadPerMonth}
  system data overhead per month: ${systemDataOverheadPerMonth}
  `;
  return {
    megaBytes: megaBytesTotal,
    price: price,
    originalPrice: originalPrice,
    debugOutput: debug,
  };
};
