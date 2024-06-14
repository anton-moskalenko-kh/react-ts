import React, {useEffect} from 'react';
import {useAppDispatch} from "../redux/store";
import UsersComponent from "../components/UsersComponent/UsersComponent";
import {usersActions} from "../redux/slices/usersSlice";

const UsersPage = () => {

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(usersActions.loadUsers())
    }, []);

    return (
        <div>
            <UsersComponent/>
        </div>
    );
};

export default UsersPage;