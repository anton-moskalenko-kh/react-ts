import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../../models/IUserModel";
import {getAllUsers} from "../../services/user.api.services";
import User from "../User/User";

type IPropsType = {lift?: (userId: number) => void }

const Users:FC<IPropsType> = ({lift}) => {

    const [users, setUsers] = useState<IUserModel[]>([])

    useEffect(() => {
        getAllUsers().then(({data: {users}}) => setUsers(users))
    }, []);

    return (
        <>
            {users.map((user) => <User key={user.id} user={user} lift={lift}/>)}
        </>
    );
};

export default Users;
