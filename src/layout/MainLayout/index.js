import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

import FolderIcon from "@mui/icons-material/Folder";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import WorkIcon from "@mui/icons-material/Work";
import {
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";

import NavBar from "./NavBar";
import config from "./../../config";
import { getWindowSize } from "./../../utils";

const navItems = [
  { label: "Home", path: "/", icon: <HomeIcon /> },
  { label: "Experience", path: "/experience", icon: <WorkIcon /> },
  { label: "Projects", path: "/projects", icon: <FolderIcon /> },
];

const settingsItem = {
  label: "Settings",
  path: "/setting",
  icon: <SettingsIcon />,
};

export default function MainLayout() {
  const customization = useSelector((state) => state.customization);
  const [open, setOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const isMobile = windowSize.innerWidth <= config.magicNumber;

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", customization.mode);
  }, [customization.mode]);

  return (
    <div
      className="page-background"
      style={{
        background: config.bgMap(customization.mode, customization.bg),
      }}
    >
      <div className="page-layout">
        <NavBar
          handleMenubar={() => setOpen(true)}
          isMobile={isMobile}
          navItems={navItems}
        />

        <SwipeableDrawer
          anchor="right"
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
        >
          <List className="mobile-nav-list">
            {navItems.map((item) => (
              <ListItemButton
                component={NavLink}
                end={item.path === "/"}
                key={item.path}
                onClick={() => setOpen(false)}
                to={item.path}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
            <Divider sx={{ my: 1 }} />
            <ListItemButton
              component={NavLink}
              onClick={() => setOpen(false)}
              to={settingsItem.path}
            >
              <ListItemIcon>{settingsItem.icon}</ListItemIcon>
              <ListItemText primary={settingsItem.label} />
            </ListItemButton>
          </List>
        </SwipeableDrawer>

        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
