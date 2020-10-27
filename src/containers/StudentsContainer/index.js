import React from 'react';
import Groups from '../../components/Groups';
import Students from '../../components/Students';
import styles from './index.module.scss';

const GROUP_NUMBER = 6;
class StudentGroupsContainer extends React.Component {
  render = () => (
    <div className={styles.container}>
      <Groups title="分组列表" groupNumber={GROUP_NUMBER} />
      <Students title="学员列表" />
    </div>
  );
}

export default StudentGroupsContainer;
