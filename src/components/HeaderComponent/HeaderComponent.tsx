import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './HeaderComponent.module.css'

const HeaderComponent = () => {
    return (
        <div className={styles.navBlock}>
            <NavLink to={'/'}>Homepage</NavLink>
            <NavLink to={'users'}>Users</NavLink>
            <NavLink to={'/posts'}>Posts</NavLink>
            <NavLink to={'/comments'}>Comments</NavLink>
        </div>
    );
};

export default HeaderComponent;