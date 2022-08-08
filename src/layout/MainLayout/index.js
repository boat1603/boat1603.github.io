import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";

import NavBar from "./NavBar";
import Footer from "./Footer";

import {
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  // Typography,
  Button,
  IconButton,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
// import FolderIcon from "@mui/icons-material/Folder";
// import DashboardIcon from "@mui/icons-material/Dashboard";
import CodeIcon from "@mui/icons-material/Code";
import SettingsIcon from "@mui/icons-material/Settings";
import DownloadIcon from "@mui/icons-material/Download";
import CloseIcon from "@mui/icons-material/Close";

import { GrCertificate } from "react-icons/gr";

import PerfectScrollbar from "react-perfect-scrollbar";
// import Footer from "./Footer";

import config from "./../../config";

import { gridSpacing } from "./../../store/constant";

import { getWindowSize } from "./../../utils";

import WebsiteCond from "./../../pages/content/WebsiteCond";

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

  const location = useLocation();
  useEffect(() => {
    scrollTop();
  }, [location]);
  const ps = useRef();
  function scrollTop() {
    const curr = ps.current;
    if (curr) {
      curr.scrollTop = 0;
    }
  }

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
            <ListItemText primary={open && "Profile"} />
          )}
        </ListItemButton>
        {/* <ListItemButton
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
        </ListItemButton> */}
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
            window.location.href = `${basename}/courses`;
          }}
        >
          <ListItemIcon>
            <GrCertificate size={24} className="icon" />

            {/* <GrCertificate size={24} style={{ color: "white" }} /> */}
          </ListItemIcon>
          {(open || !windowSize.innerWidth > config.magicNumber) && (
            <ListItemText primary="Online Courses" />
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
            window.location.href = `${basename}/hackathon`;
          }}
        >
          <ListItemIcon>
            <CodeIcon />
          </ListItemIcon>
          {(open || !windowSize.innerWidth > config.magicNumber) && (
            <ListItemText primary="Hackathon" />
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

  // Term & Cond
  let [readcond, setReadcond] = useState(false);

  return (
    <div
      className="page-background"
      style={{
        background: config.bgMap(customization.mode, customization.bg),
      }}
    >
      <Dialog
        onClose={() => {
          setReadcond(false);
        }}
        aria-labelledby="customized-dialog-title"
        open={readcond}
      >
        <DialogTitle sx={{ m: 0, p: 2 }}>
          <div className="text-title" style={{ padding: "0px", margin: "0px" }}>
            Term and Condition
          </div>

          <IconButton
            aria-label="close"
            onClick={() => {
              setReadcond(false);
            }}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <PerfectScrollbar style={{ maxHeight: "70vh" }}>
            <WebsiteCond />
          </PerfectScrollbar>
        </DialogContent>
        <DialogActions>
          <Button
            // autoFocus
            onClick={() => {
              setReadcond(false);
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <div
        className="page-layout"
        style={{
          height: "95%",
        }}
      >
        <NavBar handleMenubar={handleMenubar} />
        <div
          className="page-content"
          // style={{
          //   height:
          //     document.documentElement.getAttribute("TermnCond") !== "accept"
          //       ? "80%"
          //       : "83%",
          // }}
        >
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
              <PerfectScrollbar containerRef={(el) => (ps.current = el)}>
                <div style={{ paddingRight: "20px", height: "90%" }}>
                  <Outlet />
                </div>
              </PerfectScrollbar>
            </div>
          </div>
        </div>
        <Footer setReadcond={setReadcond} />
        {/* {document.documentElement.getAttribute("TermnCond") !== "accept" && (
          <Footer setReadcond={setReadcond} />
        )} */}
      </div>
    </div>
  );
}
