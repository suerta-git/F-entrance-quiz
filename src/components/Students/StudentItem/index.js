import React from 'react';

// TODO GTB-知识点: + 公共组件抽取合理，但是文件目录结构不太合理，共用组件不应该放在Students里面
// TODO GTB-知识点: * props可以使用解构语法更简单
const StudentItem = (props) => <li>{`${props.student.id}. ${props.student.name}`}</li>;

export default StudentItem;
