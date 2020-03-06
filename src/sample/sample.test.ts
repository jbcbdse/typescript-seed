import { doubler } from "./sample";

describe("doubler", () => {
  it("should return the input number plus itself", () => {
    expect(doubler(3)).toBe(6);
  });
});
