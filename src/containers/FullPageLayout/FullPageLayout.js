import React from 'react';
import { Layout } from "antd";

const FullPageLayout = ({children}) => {

  // const { Content } = Layout;

  return (
    <div>
      <main className="main text-muted">{children}</main>
    </div>
  );
}

export default FullPageLayout;