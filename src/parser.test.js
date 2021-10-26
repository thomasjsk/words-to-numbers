import { ones, parse, teens, tens } from "./parser";

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

    describe("< 100", () => {
      tens.forEach((numberString, index) => {
        const expected = (index + 2) * 10;
        it(`should return ${expected} for ${numberString}`, () => {
          expect(parse(numberString)).toEqual(expected);
        });
      });
    });
  });

  describe("multipliers", () => {
    it("should multiply by 100 if matched hundred", () => {
      const numberString = "five hundred";

      expect(parse(numberString)).toEqual(500);
    });

    it("should multiply by 1000 if matched thousand", () => {
      const numberString = "seven thousand";

      expect(parse(numberString)).toEqual(7000);
    });

    it("should multiply by 1000000 if matched million", () => {
      const numberString = "two million";

      expect(parse(numberString)).toEqual(2000000);
    });
  });
});
