import React from 'react';
import StudentItem from './StudentItem';

class Students extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
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
            <button type="button">+ 添加学员</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Students;
