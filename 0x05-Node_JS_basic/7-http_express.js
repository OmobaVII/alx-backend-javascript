const fs = require('fs');

function countStudents(path) {
  const students = {};
  const fields = {};
  let count = 0;
  return new Promise((accept, reject) => {
    fs.readFile(path, (error, content) => {
      if (error) {
        reject(error);
      } else {
        let display = '';
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

        display += `Number of students: ${c}\n`;

        for (const [k, v] of Object.entries(fields)) {
          if (k !== 'field') {
            display += `Number of students in ${k}: ${v}. `;
            display += `List: ${students[k].join(', ')}\n`;
          }
        }
        accept(display);
      }
    });
  });
}

const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString()).then((display) => {
    res.send(['This is the list of our students', display].join('\n'));
  }).catch(() => {
    res.send('This is the list of our students\nCannot load the database');
  });
});

app.listen(port, () => {
});

module.exports = app;
