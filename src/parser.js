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
  "ten",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
// const multiply = (by) => (x) => x * by;
const add = (to) => (x) => x + to;
const toMap =
  (modifier = null) =>
  (obj, next, index) => {
    const idx = index;
    obj[next] = modifier ? modifier(idx) : idx;
    return obj;
  };
export const dict = {
  ...ones.reduce(toMap(), {}),
  ...teens.reduce(toMap(add(10)), {}),
  // ...tens.reduce(toMap(multiply(10)), {}),
};

export const parse = (string) => {
  return dict[string];
};
