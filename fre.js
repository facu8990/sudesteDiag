
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const {max, min} = stats

const decimalEntero = (max + min) / 2;
const decimalDecimal = (max + min) / 2.0;

console.log(decimalEntero,decimalDecimal);