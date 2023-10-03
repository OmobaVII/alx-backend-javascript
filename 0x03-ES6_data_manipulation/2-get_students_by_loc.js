export default function getStudentsByLocation(array, city) {
  const studentLocation = array.filter((student) => student.location === city);
  return studentLocation;
}
