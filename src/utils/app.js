export const addClass = (classes=[]) => {
  return classes.filter(Boolean).join(' ');
}