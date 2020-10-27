import React from 'react';

const StudentItem = (props) => <li>{`${props.student.id}. ${props.student.name}`}</li>;

export default StudentItem;
