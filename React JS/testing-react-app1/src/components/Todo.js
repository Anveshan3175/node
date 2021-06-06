import React from 'react';

function Todo (props){
    const {id, title, completed} = props.todo;
    const h1 = <h1>{title}</h1>;
    const test = completed ? <strike>{h1}</strike> : h1;
    return <div data-testid={id}>{test}</div>;
}

export default Todo;