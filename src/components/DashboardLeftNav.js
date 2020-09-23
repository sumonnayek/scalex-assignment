import React from "react";
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import {logoutUser} from "../actions";

function DashboardLeftNav() {
    const dispatch = useDispatch();

    const onSignOut = () => {
        dispatch(logoutUser());
        dispatch(push('/login'));
    };
    return (
        <div className="left-nav">
            <ul>
                <li>Users</li>
                <li>Dashboard</li>
                <li>Logs</li>
                <li onClick={onSignOut}>Signout</li>
            </ul>
        </div>
    );
}

export default DashboardLeftNav;
