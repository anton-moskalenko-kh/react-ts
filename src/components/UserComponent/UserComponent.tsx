import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
import styles from './UserComponent.module.css'

const UserComponent: FC<IUserModel> = ({id, name, username, email}) => {
    return (
        <div className={styles.userBlock}>
            <h3>{id} - {name}</h3>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default UserComponent;