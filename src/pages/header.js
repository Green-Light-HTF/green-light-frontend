import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Input, InputNumber, message, Typography, Space, Alert, Spin } from 'antd';
import axios from "axios";
import logo from "./images/GreenLightLogo.jpeg";

const Header = () => {
    return (
        <div style={{ height: "57px", width: "100%", backgroundColor: "#00857ce8", display: "flex", alignItems: "center" }}>
            <div className="logo">
                <img src={logo} alt="Logo" style={{height:"60px"}}/>
            </div>
            <div style={{color:"white", fontSize:"24px", textAlign:"center", width:"inherit", fontWeight:"500"}}>
                Green Corridor
            </div>
        </div>
    );
};
export default Header;
