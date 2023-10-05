export default function updateStudentGradeByCity(studentsArray, city, newGrades) {
  const cityStudents = studentsArray.filter((student) => student.location === city);
  const gradeStudents = cityStudents.map((student) => {
    const foundGrade = newGrades.find((grade) => grade.studentId === student.id);
    return {
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: foundGrade ? foundGrade.grade : 'N/A',
    };
  });
  return gradeStudents;
}
