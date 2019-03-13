import React from 'react';
import PropTypes from 'prop-types';
 
class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.list}
      </div>
    );
  }
}

App.propTypes = {
  list: PropTypes.array,
}

export default App;
