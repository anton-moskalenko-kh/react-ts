import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
import styles from './UserComponent.module.css'
import {useNavigate} from "react-router-dom";

interface IUserProps {
    user: IUserModel
}
const UserComponent: FC<IUserProps> = ({user}) => {
    const navigate = useNavigate()

    return (
        <div className={styles.userBlock}>
            <h3>{user.id} - {user.name}</h3>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <button onClick={() => {
                navigate(user.id.toString())
            }}>Show posts of user</button>
        </div>
    );
};

export default UserComponent;