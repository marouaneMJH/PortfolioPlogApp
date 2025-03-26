// import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import HeaderCom from "./components/header";



function App() {
    return (
        <>
            <div>
                <HeaderCom />
                <Outlet />
            </div>
        </>
    );
}

export default App;
