export const messagesIntervalChoices: number[] = [
  1 / 60 / 10, // 100ms
  1 / 60, // 1s
  1, // 1m
  10, // 10m
  60, // 1h
  60 * 4, // 4h
  60 * 24, // 24h
];

export const connectsIntervalChoices: number[] = [
  0, // 0
  10, // 10m
  60, // 1h
  60 * 4, // 4h
  60 * 24, // 24h
  60 * 72, // 3d
];

export const dataPointsChoices: number[] = [1, 2, 3, 4, 5, 10, 25, 50];

export const codeUpdatesIntervalChoices: number[] = [
  60 * 24, // 1d
  60 * 24 * 7, // 1w
  60 * 24 * 30, // 1mo
  60 * 24 * 30 * 3, // 3mo
  60 * 24 * 30 * 6, // 6mo
];

export const firmwareUpdatesIntervalChoices: number[] = [
  60 * 24 * 30, // 1mo
  60 * 24 * 30 * 3, // 3mo
  60 * 24 * 30 * 6, // 6mo
  60 * 24 * 30 * 12, // 12mo
];

export const numberOfDevicesChoices: number[] = [1, 10, 100, 1000, 10000, 100000];
