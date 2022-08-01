import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Customization from "../Customization";
import NavBar from "./NavBar";
import Footer from "./Footer";

import config from "./../../config";

export default function MainLayout() {
  const customization = useSelector((state) => state.customization);
  

  return (
    <div
      className="page-background"
      style={{
        background: config.bgMap(customization.mode, customization.bg),
      }}
    >
      <div className="page-layout">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
      <Customization />
    </div>
  );
}
