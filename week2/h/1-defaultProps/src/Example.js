import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.list}
      </div>
    );
  }
}

App.defaultProps = {
  list: [],
}

export default App;
