import React, { Component } from 'react';
import './App.scss';
import './domFunctions';
import Arrow from './components/Arrow/Arrow'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="arrowContent">
          <Arrow direction={'left'}/>
          <Arrow direction={'right'}/>
        </div>
      </div>
    );
  }
}

export default App;
