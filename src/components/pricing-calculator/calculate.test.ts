import { calculate } from "./calculate";

describe("calculate", () => {
  it("returns correct values", () => {
    const result = calculate({
      messagesInterval: 1,
      connectsInterval: 10,
      dataPoints: 10,
      codeUpdatesInterval: 60 * 24 * 7,
      firmwareUpdatesInterval: 60 * 24 * 30,
      numberOfDevices: 1,
    });

    expect(result.megaBytes).toBeCloseTo(34.65);
    expect(result.price).toBe(0.0);
  });
});
