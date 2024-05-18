import React from 'react';
import UsersComponent from "../components/UsersComponent/UsersComponent";
import {Outlet} from "react-router-dom";

const Users = () => {
    return (
        <div>
            <UsersComponent/>
        </div>
    );
};

export default Users;