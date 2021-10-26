export const ones = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
export const teens = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
export const tens = [
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
const forTens = (x) => (x + 2) * 10;
const forTeens = (x) => x + 10;
const toMap =
  (modifier = null) =>
  (obj, next, index) => {
    const idx = index;
    obj[next] = modifier ? modifier(idx) : idx;
    return obj;
  };
export const dict = {
  ...ones.reduce(toMap(), {}),
  ...teens.reduce(toMap(forTeens), {}),
  ...tens.reduce(toMap(forTens), {}),
};

export const parse = (string) => {
  return dict[string];
};
