import React, { Component } from 'react';
import StudentGroupsContainer from '../containers/StudentsContainer';
import './App.scss';

class App extends Component {
  // TODO GTB-工程实践: - 与业务需求无关代码不要提交
  componentDidMount = () => {
    fetch('http://localhost:8080/connection-test', {
      method: 'GET',
      mode: 'cors',
    })
      .then((res) => {
        console.log('调用成功，返回状态：', res.status);
      })
      .catch((err) => {
        console.log('调用失败，错误信息：', err.message);
      });
  };

  render() {
    return (
      <div data-testid="app" className="App">
        <StudentGroupsContainer />
      </div>
    );
  }
}

export default App;
// TODO GTB-工程实践: * 小步提交，commit msg清晰
// TODO GTB-综合: * 按quiz提交时间计算完成度比较低，只有显示学员列表是前后端完整的，也没有样式，代码结构清晰，组件划分做的不错，
