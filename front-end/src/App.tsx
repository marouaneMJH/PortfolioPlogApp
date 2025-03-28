// import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import HeaderCom from "./components/header";
import Container from "./components/basic/Container";

function App() {
    return (
        <>
            <Container>
                <HeaderCom />
                <Outlet />
            </Container>
        </>
    );
}

export default App;
