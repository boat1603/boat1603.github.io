import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getWindowSize } from "./../utils";

import { Grid } from "@mui/material";

import DataCard from "../ui-component/cards/DataCard";

import BadgeIcon from "@mui/icons-material/Badge";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LanguageIcon from "@mui/icons-material/Language";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

import PerfectScrollbar from "react-perfect-scrollbar";

import config from "./../config";

export default function HomePage() {
  const customization = useSelector((state) => state.customization);

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

  return (
    <div style={{ paddingRight: "20px" }}>
      <div className="text-title">Personal Information</div>
      <Grid
        sx={{ flexGrow: 1 }}
        container
        spacing={8}
        alignItems="flex-start"
        justifyContent={
          windowSize.innerWidth > config.magicNumber ? "flex-start" : "center"
        }
        // paddingRight="20px"
      >
        <Grid
          item
          maxWidth={
            windowSize.innerWidth > config.magicNumber ? "40%" : "400px"
          }
          width={windowSize.innerWidth > config.magicNumber ? "40%" : "100%"}
        >
          <img
            src="/images/profile1.JPG"
            style={{
              width: "100%",
              borderRadius: "50px",
              marginTop: "5px",
            }}
            alt=""
          />
        </Grid>
        <Grid
          item
          marginTop={
            windowSize.innerWidth > config.magicNumber ? "0px" : "-60px"
          }
          marginLeft={
            windowSize.innerWidth > config.magicNumber ? "-40px" : "0px"
          }
          width={windowSize.innerWidth > config.magicNumber ? "60%" : "100%"}
        >
          <DataCard
            icon={<BadgeIcon />}
            title={<p className="text-content-title">Name</p>}
            content={<p className="text-content">Peerawat Rojratchadakorn</p>}
            // style={{ maxWidth: "320px" }}
          />
          <DataCard
            icon={<LocalOfferIcon />}
            title={<p className="text-content-title">Nickname</p>}
            content={<p className="text-content">Boat</p>}
            // style={{ maxWidth: "320px" }}
          />
          <DataCard
            icon={<EmailIcon />}
            title={<p className="text-content-title">Email</p>}
            content={<p className="text-content">peerawat.roj@gmail.com</p>}
            // style={{ maxWidth: "320px" }}
          />
          <DataCard
            icon={<CallIcon />}
            title={<p className="text-content-title">Phone Number</p>}
            content={<p className="text-content">(+66) 81 999 9230</p>}
            // style={{ maxWidth: "320px" }}
          />
          <DataCard
            icon={<LanguageIcon />}
            title={<p className="text-content-title">Language</p>}
            content={<p className="text-content">TH (Mother Language), EN</p>}
            // style={{ maxWidth: "320px" }}
          />
          <DataCard
            icon={<DriveEtaIcon />}
            title={<p className="text-content-title">Driver License</p>}
            content={
              <p className="text-content">
                Temporary Private Car Driving Licence
              </p>
            }
            // style={{ maxWidth: "320px" }}
          />
          <DataCard
            icon={<MilitaryTechIcon />}
            title={<p className="text-content-title">Military Status</p>}
            content={<p className="text-content">Exempted</p>}
            // style={{ maxWidth: "320px" }}
          />
        </Grid>
      </Grid>
      <div className="text-title" style={{ marginTop: "20px" }}>
        Programming Skills
      </div>
      {/* <PerfectScrollbar> */}
      {/* <div
          style={{
            display: "flex",
            width: "670px",
            overflow: "hidden",
          }}
        > */}
      <Grid
        container
        spacing={0}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <DataCard
          icon={<img src="/icons/python-icon.png" width="25px" alt="" />}
          title={<p className="text-content-title">#Rank 1</p>}
          content={<p className="text-content">Python</p>}
          style={{ width: "160px", margin: "5px", height: "80px" }}
        />
        <DataCard
          icon={<img src="/icons/js-icon.png" width="25px" alt="" />}
          title={<p className="text-content-title">#Rank 2</p>}
          content={<p className="text-content">Javascript</p>}
          style={{ width: "160px", margin: "5px", height: "80px" }}
        />
        <DataCard
          icon={<img src="/icons/matlab-icon.png" width="25px" alt="" />}
          title={<p className="text-content-title">#Rank 3</p>}
          content={<p className="text-content">Matlab</p>}
          style={{ width: "160px", margin: "5px", height: "80px" }}
        />
        <DataCard
          icon={<img src="/icons/cpp-icon.png" width="25px" alt="" />}
          title={<p className="text-content-title">#Rank 4</p>}
          content={<p className="text-content">C/C++</p>}
          style={{ width: "160px", margin: "5px", height: "80px" }}
        />

        {/* </div> */}
      </Grid>
      {/* </PerfectScrollbar> */}
      <div className="text-subtitle" style={{ marginTop: "20px" }}>
        Tools{" & "}FrameWork
      </div>
      <Grid
        container
        spacing={0}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <div></div>
      </Grid>
      <div className="text-title" style={{ marginTop: "20px" }}>
        Jobs that I prefer to do
      </div>
      <div className="text-title" style={{ marginTop: "20px" }}>
        Work Experience
      </div>
      <div className="text-title" style={{ marginTop: "20px" }}>
        Education
      </div>
    </div>
  );
}
