import React, { Component } from 'react';
import './App.scss';
import './domFunctions';
import Arrow from './components/Arrow/Arrow';
import IntroText from './components/IntroText/IntroText';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='textContent'>
          <IntroText/>
        </div>
        <div className='arrowContent'>
          <Arrow direction={'left'}/>
          <Arrow direction={'right'}/>
        </div>
      </div>
    );
  }
}

export default App;
