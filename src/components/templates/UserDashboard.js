import React, {useEffect, useState} from 'react';
import {DashboardComponent} from "../widgets/dashboard/DashboardComponent";
import DashboardService from "../../services/DashboardService";
import ResponseUtils from "../../utils/ResponseUtils";
import RedirectService from "../../services/RedirectService";
import LoginService from "../../services/LoginService";


export const UserDashboard = (props) => {
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        getComplaint();
    }, []);

    const createNewComplaint = async (item) => {
        const response = await DashboardService.save(item);
        if(!ResponseUtils.isValid(response)) {
            RedirectService.redirect(response.data.redirect, "/login");
        }
        setComplaints(previousState => [...previousState, response.data])
    };

    const getComplaint = async () => {
        const response = await DashboardService.getForUser();
        if(!ResponseUtils.isValid(response)) {
            RedirectService.redirect(response.data.redirect, "/login");
        }
        setComplaints(response.data)
        console.log(response)
    };

    const logout = async () => {
        const response = await LoginService.logout();
        if(ResponseUtils.isValid(response)) {
            RedirectService.redirect(response.data.redirect, "/login");
        }
    };

    return (
        <DashboardComponent
            header={'My complaints'}
            isAdmin={false}
            complaints={complaints}
            create={createNewComplaint}
            logout={logout}
        />
    )
};