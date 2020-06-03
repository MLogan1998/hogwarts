// todo
// git all students
// display all of them
// profit

import studentData from '../../helpers/data/studentData';
import utils from '../../helpers/utils/utils';
import './studentList.scss';

const createStudentList = () => {
  const allStudents = studentData.getStudents();
  let domString = '<ul class="student-list">';
  allStudents.forEach((student) => {
    domString += `<li>${student.name}</li>`;
  });
  domString += '</ul>';
  utils.printToDom('#allStudents', domString);
};

export default { createStudentList };
