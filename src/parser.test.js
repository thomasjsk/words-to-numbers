import { ones, parse, teens, tens } from "./parser";

const testArray = (arr) =>
  arr.forEach((numberString, expected) => {
    it(`should return ${expected} for ${numberString}`, () => {
      expect(parse(numberString)).toEqual(expected);
    });
  });
describe("match word", () => {
  describe("single digit", () => {
    testArray(ones);
  });

  describe("double digit", () => {
    describe("< 20", () => {
      testArray(teens);
    });

    describe("< 100", () => {
      testArray(tens);
    });
  });
});
