import React from 'react';
import PropTypes from 'prop-types';
 
class Example extends React.Component {
  render() {
    return (
      <div>
        {this.props.list}
      </div>
    );
  }
}

Example.propTypes = {
  list: PropTypes.array,
}

export default Example;
