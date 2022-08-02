import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Customization from "../Customization";
import NavBar from "./NavBar";

import {
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FolderIcon from "@mui/icons-material/Folder";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import PerfectScrollbar from "react-perfect-scrollbar";
// import Footer from "./Footer";
// import MiniDrawer from "./MenuDrawer";

import config from "./../../config";

import { gridSpacing } from "./../../store/constant";

export default function MainLayout() {
  const customization = useSelector((state) => state.customization);
  const [customizationopen, setCustomizationopen] = useState(false);
  let [open, setOpen] = useState(false);
  let handleMenubar = () => {
    setOpen(!open);
  };

  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      // console.log(getWindowSize(), windowSize);
      if (
        customizationopen &&
        getWindowSize().innerWidth <= 768 &&
        windowSize.innerWidth > 768
      ) {
        setOpen(false);
      }
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [setOpen, windowSize, customizationopen]);

  const MenuItems = () => {
    return (
      <List>
        <ListItemButton
          style={{
            height: "50px",
            borderRadius: windowSize.innerWidth > 768 ? "10px" : "5px",
          }}
        >
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          {(open || !windowSize.innerWidth > 768) && (
            <ListItemText primary={open && "Profiles"} />
          )}
        </ListItemButton>
        <ListItemButton
          style={{
            height: "50px",
            borderRadius: windowSize.innerWidth > 768 ? "10px" : "5px",
          }}
        >
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          {(open || !windowSize.innerWidth > 768) && (
            <ListItemText primary="Portfollio" />
          )}
        </ListItemButton>
        <ListItemButton
          style={{
            height: "50px",
            borderRadius: windowSize.innerWidth > 768 ? "10px" : "5px",
          }}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          {(open || !windowSize.innerWidth > 768) && (
            <ListItemText primary="Dashboard" />
          )}
        </ListItemButton>
        <ListItemButton
          style={{
            height: "50px",
            borderRadius: windowSize.innerWidth > 768 ? "10px" : "5px",
          }}
        >
          <ListItemIcon>
            <EmojiEventsIcon />
          </ListItemIcon>
          {(open || !windowSize.innerWidth > 768) && (
            <ListItemText primary="Certificates" />
          )}
        </ListItemButton>
      </List>
    );
  };

  return (
    <div
      className="page-background"
      style={{
        background: config.bgMap(customization.mode, customization.bg),
      }}
    >
      <div className="page-layout">
        <NavBar handleMenubar={handleMenubar} />
        <div className="page-content">
          <div
            className="content-card"
            style={{
              padding: "0px",
              display: "flex",
              // padding: "10px",
              transition: "all 0.5s ease",
            }}
          >
            {windowSize.innerWidth > 768 ? (
              <div
                style={{
                  width: open ? "250px" : "78px",
                  padding: "10px",
                  transition: "all 0.5s ease",

                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <MenuItems />
              </div>
            ) : (
              <div style={{ transition: "all 0.5s ease" }}>
                <SwipeableDrawer
                  anchor={"left"}
                  open={open}
                  onClose={() => {
                    setOpen(false);
                  }}
                  onOpen={() => {
                    setOpen(true);
                  }}
                >
                  <Grid container spacing={gridSpacing} sx={{ p: 3 }}>
                    <MenuItems />
                  </Grid>
                </SwipeableDrawer>
              </div>
            )}
            <div
              className="content-card"
              style={{
                transition: "width 2s",
                backgroundColor:
                  customization.mode === "dark" ? "#44444466" : "#dddddd66",
              }}
            >
              <PerfectScrollbar>
                <Outlet />
              </PerfectScrollbar>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
      <Customization open={customizationopen} setOpen={setCustomizationopen} />
    </div>
  );
}

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
