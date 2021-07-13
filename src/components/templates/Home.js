import React, {useEffect, useState} from 'react';
import {UserDashboard} from "./UserDashboard";
import AuthService from "../../services/AuthService";
import {Redirect} from "react-router-dom";
import {AdminDashboard} from "./AdminDashboard";

export const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    React.useEffect(() => {
        AuthService.ensureUpdated().then(() => setIsLoading(false));
    }, []);

    if(isLoading) return null;

    if(AuthService.isAnonymous()) {
        return (
            <Redirect to="/login"/>
        );
    } else if(AuthService.isAdminAuthenticated()) {
        return (
            <AdminDashboard/>
        )
    } else {
        return <UserDashboard/>
    }
};