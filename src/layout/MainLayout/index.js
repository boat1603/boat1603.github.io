import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

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
import SettingsIcon from "@mui/icons-material/Settings";
import DownloadIcon from "@mui/icons-material/Download";

import PerfectScrollbar from "react-perfect-scrollbar";
// import Footer from "./Footer";

import config from "./../../config";

import { gridSpacing } from "./../../store/constant";

import { getWindowSize } from "./../../utils";

export default function MainLayout() {
  const customization = useSelector((state) => state.customization);
  let [open, setOpen] = useState(false);
  let handleMenubar = () => {
    setOpen(!open);
  };
  let basename = config.basename !== "/" ? config.basename : "/#";

  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const MenuItems = () => {
    return (
      <List style={{ width: "fit-content" }}>
        <ListItemButton
          style={{
            height: "50px",
            borderRadius:
              windowSize.innerWidth > config.magicNumber ? "10px" : "5px",
            width: open ? "200px" : "58px",
          }}
          onClick={() => {
            if (windowSize.innerWidth <= config.magicNumber) {
              setOpen(false);
            }
            window.location.href = `${basename}/`;
          }}
        >
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          {(open || !windowSize.innerWidth > config.magicNumber) && (
            <ListItemText primary={open && "Profiles"} />
          )}
        </ListItemButton>
        <ListItemButton
          style={{
            height: "50px",
            borderRadius:
              windowSize.innerWidth > config.magicNumber ? "10px" : "5px",
            width: open ? "200px" : "58px",
          }}
          onClick={() => {
            if (windowSize.innerWidth <= config.magicNumber) {
              setOpen(false);
            }
            window.location.href = `${basename}/dashboard`;
          }}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          {(open || !windowSize.innerWidth > config.magicNumber) && (
            <ListItemText primary="Dashboard" />
          )}
        </ListItemButton>
        <ListItemButton
          style={{
            height: "50px",
            borderRadius:
              windowSize.innerWidth > config.magicNumber ? "10px" : "5px",
            width: open ? "200px" : "58px",
          }}
          onClick={() => {
            if (windowSize.innerWidth <= config.magicNumber) {
              setOpen(false);
            }
            window.location.href = `${basename}/portfolio`;
          }}
        >
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          {(open || !windowSize.innerWidth > config.magicNumber) && (
            <ListItemText primary="Portfolio" />
          )}
        </ListItemButton>
        <ListItemButton
          style={{
            height: "50px",
            borderRadius:
              windowSize.innerWidth > config.magicNumber ? "10px" : "5px",
            width: open ? "200px" : "58px",
          }}
          onClick={() => {
            if (windowSize.innerWidth <= config.magicNumber) {
              setOpen(false);
            }
            window.location.href = `${basename}/certificates`;
          }}
        >
          <ListItemIcon>
            <EmojiEventsIcon />
          </ListItemIcon>
          {(open || !windowSize.innerWidth > config.magicNumber) && (
            <ListItemText primary="Certificates" />
          )}
        </ListItemButton>
        <ListItemButton
          style={{
            height: "50px",
            borderRadius:
              windowSize.innerWidth > config.magicNumber ? "10px" : "5px",
            width: open ? "200px" : "58px",
          }}
          onClick={() => {
            if (windowSize.innerWidth <= config.magicNumber) {
              setOpen(false);
            }
            window.location.href = `${basename}/downloads`;
          }}
        >
          <ListItemIcon>
            <DownloadIcon />
          </ListItemIcon>
          {(open || !windowSize.innerWidth > config.magicNumber) && (
            <ListItemText primary="Download" />
          )}
        </ListItemButton>
        <ListItemButton
          style={{
            height: "50px",
            borderRadius:
              windowSize.innerWidth > config.magicNumber ? "10px" : "5px",
            width: open ? "200px" : "58px",
          }}
          onClick={() => {
            if (windowSize.innerWidth <= config.magicNumber) {
              setOpen(false);
            }
            window.location.href = `${basename}/setting`;
          }}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          {(open || !windowSize.innerWidth > config.magicNumber) && (
            <ListItemText primary="Settings" />
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
              // padding: "-10px",
              display: "flex",
              // padding: "10px",
              // transition: "all 0.5s ease",
            }}
          >
            {windowSize.innerWidth > config.magicNumber ? (
              <div
                style={{
                  width: open ? "200px" : "58px",
                  // padding: "10px",
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
                backgroundColor:
                  customization.mode === "dark" ? "#44444466" : "#dddddd66",
                transition: "all 0.5s ease",
                // padding: "20px",
                padding: "20px",
                paddingRight: "0px",
                // width: "90%",
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
    </div>
  );
}
