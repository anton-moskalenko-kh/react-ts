import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
import './User.css'

interface IProps {
    user: IUserModel
}

type IPropsType = IProps & {children?: React.ReactNode} & {lift?: (userId: number) => void}
const User: FC<IPropsType> = ({user, lift}) => {
    const getUserID = () => {
        if (lift) {
            lift(user.id)
        }
    };

    return (
        <div className={'userBlock'}>
            <h2>{user.id} - {user.firstName} {user.lastName} {user.maidenName}</h2>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <div>
                <button onClick={getUserID}>Show posts of User</button>
            </div>
        </div>
    );
};

export default User;