export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const valuesWithStartString = [...set].filter((value) => value.startsWith(startString));
  const valuesWithoutString = valuesWithStartString.map((value) => value.slice(startString.length));
  const finalString = valuesWithoutString.join('-');
  return finalString;
}
