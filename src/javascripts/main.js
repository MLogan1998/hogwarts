import '../styles/main.scss';
import 'bootstrap';
import studentList from './components/studentList/studentList';

const init = () => {
  studentList.createStudentList();
};

init();
