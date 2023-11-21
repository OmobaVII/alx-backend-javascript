const fs = require('fs');

function countStudents(path) {
  const students = {};
  const fields = {};
  let count = 0;
  try {
    const content = fs.readFileSync(path, 'utf-8');
    const line = content.trim().split('\n');
    for (let a = 0; a < line.length; a += 1) {
      if (line[a]) {
        count += 1;
        const fieldStudents = line[a].trim().split(',');
        if (Object.prototype.hasOwnProperty.call(students, fieldStudents[3])) {
          students[fieldStudents[3]].push(fieldStudents[0]);
        } else {
          students[fieldStudents[3]] = [fieldStudents[0]];
        }
        if (Object.prototype.hasOwnProperty.call(fields, fieldStudents[3])) {
          fields[fieldStudents[3]] += 1;
        } else {
          fields[fieldStudents[3]] = 1;
        }
      }
    }

    const c = count - 1;

    console.log(`Number of students: ${c}`);

    for (const [k, v] of Object.entries(fields)) {
      if (k !== 'field') {
        console.log(`Number of students in ${k}: ${v}. List: ${students[k].join(', ')}`);
      }
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
