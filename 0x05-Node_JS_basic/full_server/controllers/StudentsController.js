const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2]).then((students) => {
      const display = [];
      display.push('This is the list of our students');
      const k = Object.keys(students);
      k.sort();
      for (let a = 0; a < k.length; a += 1) {
        display.push(`Number of students in ${k[a]}: ${students[k[a]].length}. List: ${students[k[a]].join(', ')}`);
      }
      res.status(200).send(display.join('\n'));
    }).catch(() => {
      res.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(req, res) {
    const field = req.params.major;
    readDatabase(process.argv[2].toString()).then((students) => {
      if (!(field in students)) {
        res.status(500).send('Major parameter must be CS or SWE');
      } else {
        res.status(200).send(`List: ${students[field].join(', ')}`);
      }
    });
  }
}

module.exports = StudentsController;
