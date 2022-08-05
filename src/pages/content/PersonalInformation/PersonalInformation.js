import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { getWindowSize } from "../../../utils";

import { Grid } from "@mui/material";

import DataCard from "../../../ui-component/cards/DataCard";

import BadgeIcon from "@mui/icons-material/Badge";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LanguageIcon from "@mui/icons-material/Language";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import CakeIcon from "@mui/icons-material/Cake";

import config from "./../../../config";

export default function PersonalInformation() {
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
  function getMonthDifference(startDate, endDate) {
    return (
      endDate.getMonth() -
      startDate.getMonth() +
      12 * (endDate.getFullYear() - startDate.getFullYear())
    );
  }
  var Difference_In_Months = getMonthDifference(
    new Date("1999-03-16"),
    new Date(Date.now())
  );
  return (
    <div>
      <div className="text-title">Personal Information</div>
      <Grid
        sx={{ flexGrow: 1 }}
        container
        spacing={8}
        alignItems="flex-start"
        justifyContent={
          windowSize.innerWidth > config.magicNumber ? "flex-start" : "center"
        }
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
              borderRadius: customization.borderRadius,
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
          width={windowSize.innerWidth > config.magicNumber ? "62%" : "100%"}
        >
          <DataCard
            icon={<BadgeIcon />}
            title={<p className="text-content-title">Name</p>}
            content={
              <p className="text-content">Peerawat Rojratchadakorn (Boat)</p>
            }
            // style={{ maxWidth: "320px" }}
            style={{ marginBottom: "8px" }}
          />

          <DataCard
            icon={<EmailIcon />}
            title={<p className="text-content-title">Email</p>}
            content={
              <p className="text-content">
                <a href="mailto:peerawat.roj@gmail.com">
                  peerawat.roj@gmail.com
                </a>
              </p>
            }
            // style={{ maxWidth: "320px" }}
            style={{ marginBottom: "8px" }}
          />
          <DataCard
            icon={<CallIcon />}
            title={<p className="text-content-title">Phone Number</p>}
            content={
              <p className="text-content">
                <a href="tel:+66-81-999-9230">(+66) 81 999 9230</a>
              </p>
            }
            // style={{ maxWidth: "320px" }}
            style={{ marginBottom: "8px" }}
          />
          <DataCard
            icon={<CakeIcon />}
            title={<p className="text-content-title">Date of Birth</p>}
            content={
              <p className="text-content">
                16 March 1999 ({Math.floor(Difference_In_Months / 12)} year{" "}
                {new Date(Date.now()).getDate() < 16
                  ? (Difference_In_Months - 1 + 12) % 12
                  : Difference_In_Months % 12}{" "}
                month)
              </p>
            }
            // style={{ maxWidth: "320px" }}
            style={{ marginBottom: "8px" }}
          />
          <DataCard
            icon={<LanguageIcon />}
            title={<p className="text-content-title">Language</p>}
            content={<p className="text-content">TH (Mother Language), EN</p>}
            // style={{ maxWidth: "320px" }}
            style={{ marginBottom: "8px" }}
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
            style={{ marginBottom: "8px" }}
          />
          <DataCard
            icon={<MilitaryTechIcon />}
            title={<p className="text-content-title">Military Status</p>}
            content={<p className="text-content">Exempted</p>}
            // style={{ maxWidth: "320px" }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
