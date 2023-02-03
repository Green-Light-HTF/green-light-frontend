import React from 'react';
import { Route, Routes,Navigate } from "react-router-dom";

import FullPageLayout from '../../containers/FullPageLayout/FullPageLayout';


const PublicRoute = (props) => {
  return (
    <Routes>
        <Route
            path={props.path}
            element={ <FullPageLayout>{props.children}</FullPageLayout> }
        />
        <Route path={props.path} element={localStorage.getItem("token") !== null ? <Navigate to="/" /> : "/login"}/>

    </Routes>
  )
}

export default PublicRoute;