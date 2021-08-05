/**
 * Creates a human readable duration.
 */
export const formatDuration = (minutes: number): string => {
  const ms = Math.round(minutes * 60 * 1000);
  if (ms == 0) {
    return "None";
  } else if (ms < 1000) {
    return `${ms} ms`;
  } else if (ms < 1000 * 60) {
    return `${Math.round(ms / 1000)} sec`;
  } else if (ms < 1000 * 60 * 60) {
    return `${Math.round(ms / 1000 / 60)} min`;
  } else if (ms < 1000 * 60 * 60 * 24) {
    const hours = ms / (1000 * 60 * 60);
    return `${hours} hour${hours > 1 ? "s" : ""}`;
  } else if (ms < 1000 * 60 * 60 * 24 * 7) {
    const days = ms / (1000 * 60 * 60 * 24);
    return `${days} day${days > 1 ? "s" : ""}`;
  } else if (ms < 1000 * 60 * 60 * 24 * 30) {
    const weeks = ms / (1000 * 60 * 60 * 24 * 7);
    return `${weeks} week${weeks > 1 ? "s" : ""}`;
  } else if (ms < 1000 * 60 * 60 * 24 * 30 * 12) {
    const months = ms / (1000 * 60 * 60 * 24 * 30);
    return `${months} month${months > 1 ? "s" : ""}`;
  } else {
    const years = ms / (1000 * 60 * 60 * 24 * 30 * 12);
    return `${years} year${years > 1 ? "s" : ""}`;
  }
};

/**
 * Formats bytes to 2 significant numbers.
 */
export const formatBytes = (bytes: number): string => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const data = bytes / Math.pow(k, i);
  const dataWithPrecision = Number.parseFloat(data.toPrecision(2));
  const dataWithFixedPoint = dataWithPrecision.toFixed(dataWithPrecision >= 10 ? 0 : 1);

  return `${dataWithFixedPoint} ${sizes[i]}`;
};

/**
 * Formats a price to 2 significant numbers.
 */
export const formatPrice = (price: number): string => {
  price = Number.parseFloat(price.toPrecision(2));
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: price >= 10 ? 0 : 1,
    minimumFractionDigits: price < 10 ? 1 : 0,
  }).format(price);
};

/**
 * Adds thousand separators.
 */
export const formatNumber = (number: number): string => {
  return new Intl.NumberFormat("en-US").format(number);
};
