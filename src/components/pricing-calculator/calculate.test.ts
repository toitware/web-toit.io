import { calculate } from "./calculate";

describe("calculate", () => {
  it("returns correct values", () => {
    // This test compares the values from the Google Spreadsheet to the values
    // the calculate function returns.
    let result = calculate({
      messagesInterval: 1,
      connectsInterval: 10,
      dataPoints: 10,
      codeUpdatesInterval: 60 * 24 * 7,
      firmwareUpdatesInterval: 60 * 24 * 30,
      numberOfDevices: 1,
    });
    expect(result.originalPrice).toBeCloseTo(1.1);
    expect(result.megaBytes).toBeCloseTo(7.9 + 0.5 + 0.3 + 2.3);
    expect(result.price).toBe(0.0);

    result = calculate({
      messagesInterval: 10,
      connectsInterval: 60 * 24,
      dataPoints: 1,
      codeUpdatesInterval: 60 * 24 * 7,
      firmwareUpdatesInterval: 60 * 24 * 30,
      numberOfDevices: 1,
    });
    expect(result.originalPrice).toBeCloseTo(0.12);
    expect(result.megaBytes).toBeCloseTo(0.3 + 0.5 + 0.0 + 0.4);
    expect(result.price).toBe(0.0);

    result = calculate({
      messagesInterval: 1 / 60,
      connectsInterval: 1,
      dataPoints: 100,
      codeUpdatesInterval: 60 * 24 * 7,
      firmwareUpdatesInterval: 60 * 24 * 30,
      numberOfDevices: 1,
    });
    expect(result.originalPrice).toBeCloseTo(330.95);
    expect(result.megaBytes).toBeCloseTo(3185.4 + 0.5 + 5.5 + 118.1);
    expect(result.price).toBeCloseTo(320.95);
  });
});
