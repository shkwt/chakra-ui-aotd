import { isNullish } from "../src";

describe("nullish", () => {
  test("should return true", () => {
    expect(isNullish(undefined)).toBeTruthy();
    expect(isNullish(null)).toBeTruthy();
  });

  test("should return false", () => {
    expect(isNullish(0)).toBeFalsy();
    expect(isNullish(2)).toBeFalsy();
    expect(isNullish([])).toBeFalsy();
    expect(isNullish({})).toBeFalsy();
    expect(isNullish("baz")).toBeFalsy();
    expect(isNullish("")).toBeFalsy();
    expect(isNullish(true)).toBeFalsy();
    expect(isNullish(false)).toBeFalsy();
  });
});
