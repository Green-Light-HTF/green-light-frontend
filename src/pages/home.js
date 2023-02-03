import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Input, InputNumber, message, Typography, Space } from 'antd';

export default function HomePage() {

    const [form] = Form.useForm();
    const nameValue = Form.useWatch('name', form);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = (values) => {
        console.log(values)
        message.success('Submit success!');
    };

    //   const onFinishFailed = () => {
    //     message.error('Submit failed!');
    //   };

    return (
        <>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", width: "100vw" }}>
                <div>
                    <Button type="primary" onClick={showModal}>
                        Open Modal
                    </Button>
                    <Modal centered="true" title="SOS" open={isModalOpen} footer="" onCancel={handleCancel}>
                        <Form form={form} layout="vertical" autoComplete="off" onFinish={onFinish} >

                            <Form.Item name="emergency" label="Tell us about Emergency"
                                rules={[

                                    {
                                        required: true,
                                        message: 'Please, Tell us your Emergency',
                                    },
                                ]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="information" label="Any Additional Information (Optional)">
                                <Input />
                            </Form.Item>
                            <Form.Item>
                                <Space>
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Space>
                            </Form.Item>

                        </Form>
                    </Modal>
                </div>
            </div>
        </>
    );
}
