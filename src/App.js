import React, { Component } from 'react';
import './App.css';
import Yells from './Yells/yells';
import Navigation from './Navigation/navigation';
import PersonalInfo from './PersonalInfo/personalinfo';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <PersonalInfo />
        <Yells />
      </div>
    );
  }
}

export default App;
