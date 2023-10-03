export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  const ids = array.map((person) => person.id);
  return ids;
}
