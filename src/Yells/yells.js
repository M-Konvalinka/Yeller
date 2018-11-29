import React from 'react';
import styles from './yells.module.css'; // need to import css modules stylesheet as styles instead of just a sheet


const yells = (props) => {
    return (
        <div className="Yells">
                <h5 onClick= {props.click} className={`${styles.h5Test} ${styles.yellInformation}`}>The Id of this yell is '{props.id}' , the content is '{props.content}'</h5>
                {/* className={`${styles.description} ${styles.yellow}`} */}
        </div>
    )
};

export default yells;

