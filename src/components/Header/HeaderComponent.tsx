import React from 'react';
import {Link} from "react-router-dom";
import styles from './Header.module.css'

const HeaderComponent = () => {
    return (
        <div>
            <ul className={styles.nav}>
                <li><Link to={'/'}>Authorization page</Link></li>
                <li><Link to={'cars'}>Cars page</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default HeaderComponent;