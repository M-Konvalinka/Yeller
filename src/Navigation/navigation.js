import React from 'react';
import House from './img/house.png';
import Messages from './img/messages.jpg';
import Notification from './img/notifications.png';
import { Link } from 'react-router-dom';
import styles from './navigation.module.css';

const navigation = () => (
        <div className={styles.navigation}>
            <Link to='/' className={styles.navLink}><img src={House} alt="house" className={styles.navPicture}/>Home</Link>
            <Link to='/notifications' className={styles.navLink}><img src={Notification} alt="notification" className={styles.navPicture}/>Notifications</Link>
            <Link to='/messages' className={styles.navLink}><img src={Messages} alt="message" className={styles.navPicture}/>Messages</Link>
        </div>
)

export default navigation;