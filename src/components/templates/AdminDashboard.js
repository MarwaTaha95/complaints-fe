import React, {useEffect, useState} from 'react';
import {DashboardComponent} from "../widgets/dashboard/DashboardComponent";
import DashboardService from "../../services/DashboardService";
import ResponseUtils from "../../utils/ResponseUtils";
import RedirectService from "../../services/RedirectService";
import LoginService from "../../services/LoginService";

export const AdminDashboard = (props) => {
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        getComplaints();
    }, []);

    const updateComplaintStatus = async (item) => {
        const response = await DashboardService.update(item);
        if (!ResponseUtils.isValid(response)) {
            RedirectService.redirect(response.data.redirect, "/login");
        }
        let newComplains = complaints.slice();
        let index = newComplains.findIndex(c => c.id === item.id);

        if (index !== -1) {
            newComplains.splice(index, 1);
            setComplaints(newComplains)
        }
    };

    const getComplaints = async () => {
        const response = await DashboardService.getAll();
        if (!ResponseUtils.isValid(response)) {
            RedirectService.redirect(response.data.redirect, "/login");
        }
        setComplaints(response.data);
    };

    const logout = async () => {
        const response = await LoginService.logout();
        if (ResponseUtils.isValid(response)) {
            RedirectService.redirect(response.data.redirect, "/login");
        }
    };

    return (
        <DashboardComponent
            header={'Manage complaints'}
            isAdmin={true}
            complaints={complaints}
            update={updateComplaintStatus}
            logout={logout}
        />
    )
};