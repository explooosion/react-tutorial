import React, { Component } from 'react';

class Example extends Component {

  state = {
    gender: '男',
  }

  layout = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    flexFlow: 'column'
  }

  render() {
    return (
      <div className="App" style={this.layout}>
        Radio:{this.state.gender}
        <div>
          <label htmlFor="lbBoy">男</label>
          <input
            id="lbBoy"
            type="radio"
            value="男"
            checked={this.state.gender === '男'}
            onChange={() => this.setState({ gender: '男' })}
          />
        </div>
        <div>
          <label htmlFor="lbGirl">女</label>
          <input
            id="lbGirl"
            type="radio"
            value="女"
            checked={this.state.gender === '女'}
            onChange={() => this.setState({ gender: '女' })}
          />
        </div>
      </div>
    );
  }
}

export default Example;
