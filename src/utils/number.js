export const isInt = (val) => {
  return val % 1 === 0;
}

export const humanizeDecimal = (val) => {
  return isInt(val) ? val : !isNaN(val) ? val.toFixed(1) : val;
}

export const localeNumber = (val) => {
  return !isNaN(val) ? Number(val).toLocaleString() : val;
}

export const addLeadingZero = (val, size=2) => {
  return !isNaN(val) ? String(val).padStart(size, '0') : val;
}