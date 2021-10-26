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
export const teens = {
  default: (word) => word + "teen",
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fifteen: 15,
  eighteen: 18,
};
export const tens = {
  default: (word) => word + "ty",
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  eighty: 80,
};
export const dict = {
  ...ones.reduce((obj, next, index) => {
    obj[next] = index;
    return obj;
  }, {}),
  ...teens,
  ...tens,
};

export const parse = (string) => {
  return dict[string];
};
