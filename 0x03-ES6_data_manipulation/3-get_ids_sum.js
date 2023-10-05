export default function getStudentIdsSum(studentsArray) {
  const sum = studentsArray.reduce((accumulator, students) => accumulator + students.id, 0);
  return sum;
}
