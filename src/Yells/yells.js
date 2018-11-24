import React from 'react';


const yells = (props) => {
    return (
        // <div className="Yells">
                <h5 onClick= {props.click} className='yellInformation'>{props.content}</h5>
                
        // </div>
    )
};

export default yells;