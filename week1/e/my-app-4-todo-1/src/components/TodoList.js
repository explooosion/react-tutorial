import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        const list = [
            { name: 'Sleep' },
            { name: 'Study' },
            { name: 'Work' },
        ];
        return (
            <div className="todolist">
                <ul>
                    {list.map(({ name }, index) => {
                        return (<li key={index}>{name}</li>);
                    })}
                </ul>
            </div>
        );
    }
}

export default TodoList;
