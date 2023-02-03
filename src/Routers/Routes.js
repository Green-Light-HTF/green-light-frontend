import HomePage from "../pages/home.js";
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
      </BrowserRouter>
    </>
  );
}
