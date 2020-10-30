import React from 'react';
import Groups from '../../components/Groups';
import Students from '../../components/Students';
import styles from './index.module.scss';

const GROUP_NUMBER = 6;
class StudentGroupsContainer extends React.Component {
  render = () => (
    <div className={styles.container}>
      {/* TODO GTB-工程实践: * 组件划分合理 */}
      {/* TODO GTB-工程实践: - groupNumber 没有用的props */}
      <Groups title="分组列表" groupNumber={GROUP_NUMBER} />
      <Students title="学员列表" />
    </div>
  );
}

export default StudentGroupsContainer;
