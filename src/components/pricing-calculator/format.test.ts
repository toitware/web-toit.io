import { formatBytes, formatDuration, formatNumber, formatPrice } from "./format";

describe("formatDuration", () => {
  it("properly formats different durations", () => {
    expect(formatDuration(0)).toBe("Always connected");
    expect(formatDuration(1 / 60 / 1000)).toBe("1 ms");
    expect(formatDuration(10 / 60 / 1000)).toBe("10 ms");
    expect(formatDuration(100 / 60 / 1000)).toBe("100 ms");
    expect(formatDuration(1 / 60)).toBe("1 sec");
    expect(formatDuration(10 / 60)).toBe("10 sec");
    expect(formatDuration(1)).toBe("1 min");
    expect(formatDuration(10)).toBe("10 min");
    expect(formatDuration(60)).toBe("1 hour");
    expect(formatDuration(60 * 2)).toBe("2 hours");
    expect(formatDuration(60 * 24)).toBe("1 day");
    expect(formatDuration(60 * 24 * 2)).toBe("2 days");
    expect(formatDuration(60 * 24 * 6)).toBe("6 days");
    expect(formatDuration(60 * 24 * 7)).toBe("1 week");
    expect(formatDuration(60 * 24 * 30)).toBe("1 month");
    expect(formatDuration(60 * 24 * 30 * 2)).toBe("2 months");
    expect(formatDuration(60 * 24 * 30 * 12)).toBe("1 year");
    expect(formatDuration(60 * 24 * 30 * 12 * 2)).toBe("2 years");
  });
});

describe("formatBytes", () => {
  it("properly formats different data sizes", () => {
    expect(formatBytes(0)).toBe("0 Bytes");
    expect(formatBytes(1)).toBe("1.0 B");
    expect(formatBytes(10)).toBe("10 B");
    expect(formatBytes(512)).toBe("510 B");
    expect(formatBytes(1024)).toBe("1.0 KB");
    expect(formatBytes(1024 * 512)).toBe("510 KB"); // Only 2 significant digits
    expect(formatBytes(1024 * 1024)).toBe("1.0 MB");
    expect(formatBytes(1024 * 1024 * 512)).toBe("510 MB");
    expect(formatBytes(1024 * 1024 * 1024)).toBe("1.0 GB");
    expect(formatBytes(1024 * 1024 * 1024 * 512)).toBe("510 GB");
    expect(formatBytes(1024 * 1024 * 1024 * 1024)).toBe("1.0 TB");
  });
});

describe("formatPrice", () => {
  it("properly formats different prices", () => {
    expect(formatPrice(0)).toBe("$0.0");
    expect(formatPrice(1.1)).toBe("$1.1");
    expect(formatPrice(11)).toBe("$11");
    expect(formatPrice(111)).toBe("$110");
    expect(formatPrice(1111)).toBe("$1,100");
    expect(formatPrice(1199)).toBe("$1,200");
    expect(formatPrice(111111)).toBe("$110,000");
    expect(formatPrice(1111111)).toBe("$1,100,000");
  });
});

describe("formatNumber", () => {
  it("properly formats number with separator", () => {
    expect(formatNumber(0)).toBe("0");
    expect(formatNumber(1)).toBe("1");
    expect(formatNumber(10)).toBe("10");
    expect(formatNumber(1000)).toBe("1,000");
    expect(formatNumber(100000)).toBe("100,000");
    expect(formatNumber(1000000)).toBe("1,000,000");
  });
  it("properly adds the unit name", () => {
    expect(formatNumber(0, "device")).toBe("0 devices");
    expect(formatNumber(1, "device")).toBe("1 device");
    expect(formatNumber(10, "device")).toBe("10 devices");
  });
});
