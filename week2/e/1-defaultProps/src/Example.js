import React from 'react';

class Example extends React.Component {
  render() {
    return (
      <div>
        {this.props.list}
      </div>
    );
  }
}

Example.defaultProps = {
  list: [],
}

export default Example;
