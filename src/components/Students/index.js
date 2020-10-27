import React from 'react';

class Students extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  renderStudent = (student) => <li key={student.id}>{`${student.id}. ${student.name}`}</li>;

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ul>
          {this.state.students.map(this.renderStudent)}
          <li>
            <button type="button">+ 添加学员</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Students;
