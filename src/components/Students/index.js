import React from 'react';
import StudentItem from './StudentItem';

class Students extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      addStudent: '+ 添加学员',
      isInputing: false,
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

  addStudent = async (studentName) => {
    try {
      const response = await fetch('http://localhost:8080/student', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({ name: studentName }),
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      });
      if (response.status !== 201) {
        throw new Error(response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  handleFocus = () => {
    if (!this.state.isInputing) {
      this.setState({ addStudent: '', isInputing: true });
    }
  };

  handleChange = (event) => {
    this.setState({
      addStudent: event.target.value,
    });
  };

  handleKeyDown = async (event) => {
    if (event.keyCode === 13 && this.state.addStudent.length > 0) {
      const studentName = this.state.addStudent;
      this.initInputBox();
      event.target.blur();
      await this.addStudent(studentName);
      await this.fetchStudents();
    }
  };

  handleBlur = () => {
    if (this.state.addStudent.length === 0) {
      this.initInputBox();
    }
  };

  initInputBox() {
    this.setState({ addStudent: '+ 添加学员', isInputing: false });
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ul>
          {this.state.students.map((student) => (
            <StudentItem key={student.id} student={student} />
          ))}
          <li>
            <input
              type="text"
              value={this.state.addStudent}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default Students;
