import React from 'react';
import StudentItem from './StudentItem';

class Students extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  componentDidMount = () => {
    this.fetchStudents();
  };

  fetchStudents = async () => {
    try {
      const response = await fetch('http://localhost:8080/student', {
        method: 'GET',
        mode: 'cors',
      });
      const students = await response.json();
      this.setState({ students });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ul>
          {this.state.students.map((student) => (
            <StudentItem key={student.id} student={student} />
          ))}
          <li>
            <button type="button">+ 添加学员</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Students;
