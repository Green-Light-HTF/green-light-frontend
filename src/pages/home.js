import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Input, InputNumber, message, Typography, Space, Alert, Spin } from 'antd';
import axios from "axios";

export default function HomePage() {

    const [form] = Form.useForm();
    const nameValue = Form.useWatch('name', form);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [lat, setLat] = useState();
    const [lng, setLng] = useState();
    const [loading, setLoading] = useState(false);


    const showModal = () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLat(position.coords.latitude)
            setLng(position.coords.longitude)
            setIsModalOpen(true);
        }, function (error) {
            message.error("Location is required")
            console.log(error)
            setIsModalOpen(false);

        });
    };

    const [ip, setIP] = useState('');

    //creating function to load ip address from the API
    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        setIP(res.data.IPv4)
    }

    useEffect(() => {
        //passing getData method to the lifecycle method
        getData()
    }, [])

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const { TextArea } = Input;

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = async (values) => {
        setLoading(true)
        console.log(values)
        console.log({
            lat,
            lng,
            ip: ip,
            message: values.emergency,
            other: values.information
        });
        // await axios.post('ip/file_sos', {
        //     lat,
        //     lng,
        //     ip: ip,
        //     message: values.emergency,
        //     other: values.information
        // })
        message.success('Submit success!');
        // setIsModalOpen(false);

    };

    return (
        <>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", width: "100vw" }}>
                <div>
                    <Button type="primary" onClick={showModal}>
                        SOS
                    </Button>
                    <Modal centered="true" title="SOS" open={isModalOpen} footer="" onCancel={handleCancel}>
                        <Spin spinning={loading} size="large">

                            <Form form={form} layout="vertical" autoComplete="off" onFinish={onFinish} >

                                <Form.Item name="emergency" label="Tell us about Emergency"
                                    rules={[

                                        {
                                            required: true,
                                            message: 'Please, Tell us your Emergency',
                                        },
                                    ]}>
                                    <TextArea rows={3} />
                                    {/* <Input /> */}
                                </Form.Item>
                                <Form.Item name="information" label="Any Additional Information (Optional)">
                                    <TextArea rows={2} />
                                    {/* <Input /> */}
                                </Form.Item>
                                <Form.Item>
                                    <Space>
                                        <Button type="primary" htmlType="submit">
                                            Submit
                                        </Button>
                                    </Space>
                                </Form.Item>

                            </Form>
                        </Spin>
                    </Modal>
                </div>
            </div>
        </>
    );
}
