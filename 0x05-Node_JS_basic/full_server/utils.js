const { readFile } = require('fs');

module.exports = function readDatabase(path) {
  const students = {};
  return new Promise((accept, reject) => {
    readFile(path, (error, content) => {
      if (error) {
        reject(error);
      } else {
        const line = content.toString().split('\n');
        const header = line.slice(1);
        for (let a = 0; a < header.length; a += 1) {
          if (header[a]) {
            const fieldStudents = header[a].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, fieldStudents[3])) {
              students[fieldStudents[3]].push(fieldStudents[0]);
            } else {
              students[fieldStudents[3]] = [fieldStudents[0]];
            }
          }
        }
        accept(students);
      }
    });
  });
};
