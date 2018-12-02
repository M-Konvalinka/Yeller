import React, { Component } from 'react';
import styles from './App.module.css'; // need to import css modules stylesheet as styles instead of just a sheet
import Navigation from './Navigation/navigation';
import Apiyells from './ApiYells/apiyells';
import './Navigation/navigation.css';
import PersonalInfo from './PersonalInfo/personalinfo';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {

    return (
      <div className="App">
        <Navigation />
        <div className={styles.CenteredDivs}>
        <PersonalInfo className='personalInfo' />
        <Apiyells className={styles.Wrapper}/>
        </div>
      </div>
    );
  }

 }  



export default App;
