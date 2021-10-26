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
    describe("multiply single word number", () => {
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

    describe("multiply double word number", () => {
      [
        {
          value: 51,
          string: "fifty one hundred",
          multiplierString: "hundred",
          expected: 5100,
        },
        {
          value: 39,
          string: "thirty nine thousand",
          multiplierString: "thousand",
          expected: 39000,
        },
        {
          value: 99,
          string: "ninety nine million",
          multiplierString: "million",
          expected: 99000000,
        },
      ].forEach(({ string, multiplierString, value, expected }) => {
        it(`should return ${expected} for ${value} if matched ${multiplierString}`, () => {
          expect(parse(string)).toEqual(expected);
        });
      });
    });
  });
});
