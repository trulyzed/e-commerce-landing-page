export const isInt = (val) => {
  return val % 1 === 0;
}

export const humanizeDecimal = (val) => {
  return isInt(val) ? val : !isNaN(val) ? val.toFixed(1) : val;
}