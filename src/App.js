import React, { Component } from 'react';
import Counter from './Counter';
import Text from './Text';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <Text />
      </div>
    );
  }
}

export default App;
