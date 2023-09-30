export default function returnHowManyArguments(...args) {
  let total = 0;
  // eslint-disable-next-line no-unused-vars
  for (const arg of args) {
    total += 1;
  }
  return total;
}
