import React, {FC} from 'react';
import {UserModel} from "../../models/UserModel";
import {useNavigate} from "react-router-dom";
import styles from './User.module.css'

interface IProps {
    user: UserModel
}

const UserComponent: FC<IProps> = ({user}) => {

    let navigate = useNavigate()

    return (
        <div className={styles.userBlock}>
            <p>{user.name}</p>
            <button onClick={() => {
                navigate(user.id.toString())
            }}>Show full information</button>
        </div>
    );
};

export default UserComponent;