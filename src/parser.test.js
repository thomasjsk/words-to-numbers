import { ones, parse, teens, tens } from "./parser";

const testArray = (arr) =>
  arr.forEach((numberString, expected) => {
    it(`should return ${expected} for ${numberString}`, () => {
      expect(parse(numberString)).toEqual(expected);
    });
  });
describe("match word", () => {
  describe("single digit", () => {
    ones.forEach((numberString, expected) => {
      it(`should return ${expected} for ${numberString}`, () => {
        expect(parse(numberString)).toEqual(expected);
      });
    });
  });

  describe("double digit", () => {
    describe("< 20", () => {
      teens.forEach((numberString, index) => {
        const expected = index + 10;
        it(`should return ${expected} for ${numberString}`, () => {
          expect(parse(numberString)).toEqual(expected);
        });
      });
    });

    //   describe("< 100", () => {
    //     testArray(tens);
    //   });
  });
});
