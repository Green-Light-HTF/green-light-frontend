import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Input, InputNumber, message, Typography, Space, Alert, Spin } from 'antd';
import axios from "axios";

const Footer = () => {
    return (
        <div className="footer">
            <div className="border" style={{ height: "5px", background: "#00857ce8", marginBottom: "16px" }}></div>
            <div>
                <a href="#">Contact us</a>
            </div>
            <div className="copy-right">
                <p>Copyright &copy; {new Date().getFullYear()} Trojan Horses</p>
            </div>
        </div>
    );
};
export default Footer;
