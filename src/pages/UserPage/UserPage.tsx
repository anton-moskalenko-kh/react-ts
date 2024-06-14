import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {useParams} from "react-router-dom";
import {usersActions} from "../../redux/slices/usersSlice";
import styles from './UserPage.module.css'

const UserPage = () => {

    const dispatch = useAppDispatch()
    const {user} = useAppSelector(state => state.usersSlice)
    const {id} = useParams()

    useEffect(() => {
        if (id) {
            dispatch(usersActions.loadUserById(id))
        }
    }, [id]);
    return (
        <div>
            {user &&
                <div className={styles.userPageBlock}>
                    <h3>{user.id} - {user.name}</h3>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                </div>
            }
        </div>
    );
};

export default UserPage;