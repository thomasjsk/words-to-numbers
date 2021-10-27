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
export const multipliers = {
  hundred: (value) => value * 100,
  thousand: (value) => value * 1000,
  million: (value) => value * 1000000,
};
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
  ...multipliers,
};

export const parse = (string) => {
  return Number(
    string
      .trim()
      .replace(new RegExp(" and ", "g"), " ")
      .split(" ")
      .reduce(
        ({ temp, result }, nextString, index, arr) => {
          const match = dict[nextString];

          // Multiplier keyword
          if (match instanceof Function) {
            const previousIndex = index - 1;

            // typed only multiplier keyword and zero + multiplier
            if (temp === 0) {
              const valueToMultiply = previousIndex < 0 ? 1 : 0;

              result = match(valueToMultiply);
            } else {
              // Apply multiplier
              if (nextString === "hundred") {
                // For value in temp (if multiplier === hundred)
                temp = match(temp);
              } else {
                // For result value
                result += match(temp);
                temp = 0;
              }
            }
          } else {
            // Add another value to temp
            temp += match;
          }

          // End
          if (index + 1 === arr.length) {
            result += temp;

            return result;
          }

          return { temp, result };
        },
        { temp: 0, result: 0 }
      )
  );
};
