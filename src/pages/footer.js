import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Input, InputNumber, message, Typography, Space, Alert, Spin } from 'antd';
import axios from "axios";

const Footer = () => {
    return (
        <div className="footer" style={{marginTop:"90px"}}>
            <div className="copy-right">
                <p>Copyright &copy; {new Date().getFullYear()} Trojan Horses</p>
            </div>
        </div>
    );
};
export default Footer;