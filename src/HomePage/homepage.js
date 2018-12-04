import React, { Component } from 'react';
import Apiyells from '../ApiYells/apiyells';
import PersonalInfo from '../PersonalInfo/personalinfo';
import styles from './homepage.module.css'; // need to import css modules stylesheet as styles instead of just a sheet


class homepage extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
      }
      
      render() {
    
        return (
          <div className="homepage">
            <div className={styles.CenteredDivs}>
            <PersonalInfo className='personalInfo' />
            <Apiyells className={styles.Wrapper}/>
            </div>
          </div>
        );
      }
    
     } 

export default homepage;