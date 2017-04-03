import React, { Component } from 'react';
import Blog from './Blog';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<NavBar />
        <Blog />
      </div>
    );
  }
}

export default App;
