import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    // bind functions here
  }


  render() {
    return (
      <div className='app'>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));