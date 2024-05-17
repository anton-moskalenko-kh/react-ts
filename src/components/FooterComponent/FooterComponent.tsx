import React from 'react';
import styles from './FooterComponent.module.css'

const FooterComponent = () => {
    return (
        <div className={styles.footer}>
            <hr/>
            <h3>Some information in footer</h3>
        </div>
    );
};

export default FooterComponent;