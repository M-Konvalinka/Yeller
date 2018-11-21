import React from 'react';
import House from './img/house.png';
import Message from './img/messages.jpg';
import Notification from './img/notifications.png';

const navigation = () => {
    return(
        <div className="navigation">
            <a href="" className="navLink"><img src={House} alt="house" className="navPicture"/>Home</a>
            <a href="" className="navLink"><img src={Notification} alt="notification" className="navPicture"/>Notifications</a>
            <a href="" className="navLink"><img src={Message} alt="message" className="navPicture"/>Messages</a>
        </div>
    )
};

export default navigation;