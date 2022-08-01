import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

// material-ui
import { styled, useTheme } from "@mui/material/styles";

import Customization from "../Customization";

export default function MainLayout() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Outlet />
      <Customization />
    </div>
  );
}
