import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./../components/styled/SectionHeader";
import Title  from "./../components/styled/SectionTitle";
    

// todo add statistique section for each project and post

const AdminDashBord = () => {
    return (
        <div>
            <Header>
                <Title>
                    Admin <span>DashBord</span>
                </Title>
            </Header>
            <Outlet />
        </div>
    );
};

export default AdminDashBord;
