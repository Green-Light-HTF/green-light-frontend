import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Input, InputNumber, message, Typography, Space, Alert, Spin } from 'antd';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { AudioFilled, AudioMutedOutlined } from '@ant-design/icons';
import axios from "axios";

export default function HomePage() {

    const [form] = Form.useForm();
    const nameValue = Form.useWatch('name', form);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [lat, setLat] = useState();
    const [lng, setLng] = useState();
    const [loading, setLoading] = useState(false);


    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();


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

    const handleMicClick = () => {
        if (listening) {
            listening = false;
            SpeechRecognition.startListening();
        } else {
            SpeechRecognition.stopListening();
        }
    };

    const onFinish = async (values) => {
        setLoading(true)
        console.log(values)
        console.log({
            lat,
            lng,
            ip: ip,
            message: values.emergency,
            other: values.information,
            voice: transcript
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

                                <Form.Item name="Speech">
                                    <div>
                                        <div style={{display:"flex", alignItems:"center"}}>
                                            <div style={{marginRight:"8px"}} onClick={SpeechRecognition.startListening}>{listening ? <AudioFilled /> : <AudioMutedOutlined />}</div>
                                            <div style={{display:"flex", alignItems:"center", border:"1px solid #d9d9d9", minHeight:"32px", width:"100%", padding:"0px 4px", borderRadius:"4px"}}>
                                                <p>{transcript}</p>    
                                            </div>
                                        </div>
                                        <p>Microphone: {listening ? 'on' : 'off'}</p>
                                        <div style={{display:"flex", alignItems:"center"}}>
                                            <div style={{ height: "28px", width: "60px", background: "red", color:"white", display:"flex", alignItems:"center", justifyContent:"center", borderRadius:"4px", cursor:"pointer", marginRight:"8px"}} onClick={SpeechRecognition.stopListening}>Stop</div>
                                            <div style={{ height: "28px", width: "60px", background: "#1677ff", color:"white", display:"flex", alignItems:"center", justifyContent:"center", borderRadius:"4px", cursor:"pointer"}} onClick={resetTranscript}>Reset</div>
                                        </div>
                                        {/* <p>{transcript}</p> */}
                                    </div>
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
