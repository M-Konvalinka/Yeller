import React from 'react';
import styles from './personalinfo.module.css'; // need to import css modules stylesheet as styles instead of just a sheet

const personalinfo = () => {
    return(
        <div className={styles.PersonalInformation}>
            <p>This is the test Info for the Personal Info</p>
        </div>
    )
};

export default personalinfo;