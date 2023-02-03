import React, { useState, useEffect } from "react";
import { Button, Modal } from 'antd';

export default function HomePage() {

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
    
  return (
    <>
    <div style={{display:"flex", alignItems: "center", justifyContent: "center", height:"100vh", width:"100vw"}}>
        <div> 
        <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
        </div>
    </div>
    </>
  );
}
