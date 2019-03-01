import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        // console.log(this.props);
        return (
            <div className="todolist">
                <ul>
                    {this.props.list.map(({ name }, index) => {
                        return (<li key={index}>{name}</li>);
                    })}
                </ul>
            </div>
        );
    }
}

export default TodoList;
