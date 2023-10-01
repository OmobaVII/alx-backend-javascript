export default function appendToEachArrayValue(array, appendString) {
  const realarray = [];
  for (const value of array) {
    realarray.push(appendString + value);
  }

  return realarray;
}
