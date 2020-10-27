import React from 'react';
import Groups from '../../components/Groups';
import Students from '../../components/Students';
import styles from './index.module.scss';

class StudentGroupsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  render = () => (
    <div className={styles.container}>
      <Groups title="分组列表" students={this.state.students} />
      <Students title="学员列表" students={this.state.students} />
    </div>
  );
}

export default StudentGroupsContainer;
