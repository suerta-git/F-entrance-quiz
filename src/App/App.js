import React, { Component } from 'react';
import StudentGroupsContainer from '../containers/StudentsContainer';
import './App.scss';

class App extends Component {
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
        Hello World
        <StudentGroupsContainer />
      </div>
    );
  }
}

export default App;
