import React from 'react';
import {Link} from "react-router-dom";
import  styles from './Header.module.css'

const HeaderComponent = () => {
    return (
        <div className={styles.headerBlock}>
            <ul>
                <li><Link to={''}>Homepage</Link></li>
                <li><Link to={'users'}>Users</Link></li>
                <li><Link to={'posts'}>Posts</Link></li>
            </ul>
        </div>
    );
};

export default HeaderComponent;