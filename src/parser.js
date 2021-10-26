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
const toMap = (obj, next, index) => {
  obj[next] = index;
  return obj;
};
export const dict = {
  ...ones.reduce(toMap, {}),
  ...teens.reduce(toMap, {}),
  ...tens.reduce(toMap, {}),
};

export const parse = (string) => {
  return dict[string];
};
