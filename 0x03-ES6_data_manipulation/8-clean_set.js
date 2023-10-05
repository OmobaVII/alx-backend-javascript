export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const result = [];
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const subString = value.substring(startString.length);
      result.push(subString);
    }
  }
  return result.join('-');
}
