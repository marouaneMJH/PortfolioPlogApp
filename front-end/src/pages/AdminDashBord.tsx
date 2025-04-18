import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./../components/styled/SectionHeader";
import Title from "./../components/styled/SectionTitle";
import LinkButton from "../components/basic/LinkButton";

// todo add statistique section for each project and post

const AdminDashBord = () => {
    return (
        <div>
            <Header>
                <Title>
                    Admin <span>DashBord</span>
                </Title>
            </Header>
            <LinkButton to={"new-project"}>New Project</LinkButton>
            <LinkButton to={"new-post"}>New Post</LinkButton>

            <Outlet />
        </div>
    );
};

export default AdminDashBord;
