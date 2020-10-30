import React from 'react';
import StudentItem from '../Students/StudentItem';

class Groups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
      isLoading: false,
    };
  }

  handleClick = async () => {
    try {
      this.setState({ isLoading: true });
      const response = await fetch('http://localhost:8080/group', {
        method: 'GET',
        mode: 'cors',
      });
      const groups = await response.json();
      this.setState({ groups });
    } catch (err) {
      console.error(err);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  // TODO GTB-工程实践: + 抽取render方法很好 (这里也可以提取一个组件)
  renderGroup = (group) => (
    <li key={group.name}>
      <div>{group.name}</div>
      {/* TODO GTB-工程实践: - 没有必要的html标签嵌套 */}
      <div>
        <ul>
          {group.students.map((student) => (
            <StudentItem key={student.id} student={student} />
          ))}
        </ul>
      </div>
    </li>
  );

  render() {
    return (
      <div>
        {/* TODO GTB-知识点: * 这里最好使用<header> 标签 */}
        <nav>
          <h2>{this.props.title}</h2>
          <button type="button" onClick={this.handleClick} disabled={this.state.isLoading}>
            分组学员
          </button>
        </nav>
        <ul>{this.state.groups.map(this.renderGroup)}</ul>
      </div>
    );
  }
}

export default Groups;
