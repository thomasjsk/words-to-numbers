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
    describe("just multiplier", () => {
      [
        ["hundred", 100],
        ["thousand", 1000],
        ["million", 1000000],
      ].forEach(([string, expected]) => {
        it(`should return ${expected} for only "${string}" typed`, () => {
          expect(parse(string)).toEqual(expected);
        });
      });
    });
    describe("single word number to multiply", () => {
      [
        {
          string: "five hundred",
          multiplierString: "hundred",
          multiplier: 100,
          expected: 500,
        },
        {
          string: "seventeen thousand",
          multiplierString: "thousand",
          multiplier: 1000,
          expected: 17000,
        },
        {
          string: "eleven million",
          multiplierString: "million",
          multiplier: 1000000,
          expected: 11000000,
        },
      ].forEach(({ string, multiplierString, multiplier, expected }) => {
        it(`should multiply by ${multiplier} if matched ${multiplierString}`, () => {
          expect(parse(string)).toEqual(expected);
        });
      });
    });
  });
});
