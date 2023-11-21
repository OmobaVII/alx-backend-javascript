const fs = require('fs');

function countStudents(path) {
  const students = {};
  const fields = {};
  let count = 0;
  return new Promise((accept, reject) => {
    fs.readFile(path, (error, content) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const line = content.toString().split('\n');
        for (let a = 0; a < line.length; a += 1) {
          if (line[a]) {
            count += 1;
            const fieldStudents = line[a].toString().split(',');
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
        accept(content);
      }
    });
  });
}

module.exports = countStudents;
