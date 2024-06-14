import React from 'react';
import {useAppSelector} from "../../redux/store";
import UserComponent from "../UserComponent/UserComponent";

const UsersComponent = () => {

    const {users, isLoaded} = useAppSelector(state => state.usersSlice)

    return (
        <div>
            {isLoaded ? users.map(user => <UserComponent key={user.id} user={user}/>)
            : <p>Data is loading...</p>
            }
        </div>
    );
};

export default UsersComponent;