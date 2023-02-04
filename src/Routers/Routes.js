import HomePage from "../pages/home.js";
import Speech from "../pages/speech.js";
import BingMap from "../pages/maps.js";
import { BrowserRouter } from "react-router-dom";
import PublicRoute from "./PublicRoute/PublicRoute";

export default function Routers() {
  const id = "";
  return (
    <>
      <BrowserRouter>
        <PublicRoute path={"/"}>
          <HomePage />
        </PublicRoute>
        <PublicRoute path={"/speech"}>
          <Speech />
        </PublicRoute>
        <PublicRoute path={"/maps"}>
          <BingMap />
        </PublicRoute>
      </BrowserRouter>
    </>
  );
}
