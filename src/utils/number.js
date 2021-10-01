export const isInt = (val) => {
  return val % 1 === 0;
}

export const humanizeDecimal = (val) => {
  return isInt(val) ? val : !isNaN(val) ? val.toFixed(1) : val;
}

export const localeNumber = (val) => {
  return !isNaN(val) ? Number(val).toLocaleString() : val;
}