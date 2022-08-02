import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// material-ui
import { Button, Grid, IconButton, Slider, Typography } from "@mui/material";

// project imports
import SubCard from "../ui-component/cards/SubCard";
import { SET_BORDER_RADIUS, SET_THEME, SET_BG } from "./../store/actions";
import { gridSpacing } from "../store/constant";

import config from "./../config";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness7Icon from "@mui/icons-material/Brightness7";

// concat 'px'
function valueText(value) {
  return `${value}px`;
}

// ==============================|| LIVE CUSTOMIZATION ||============================== //

export default function SettingPage(props) {
  const dispatch = useDispatch();
  const customization = useSelector((state) => state.customization);

  // state - border radius
  const [borderRadius, setBorderRadius] = useState(customization.borderRadius);
  const handleBorderRadius = (event, newValue) => {
    setBorderRadius(newValue);
    localStorage.setItem("borderRadius", newValue);
  };

  useEffect(() => {
    dispatch({ type: SET_BORDER_RADIUS, borderRadius });
    localStorage.setItem("borderRadius", borderRadius);
  }, [dispatch, borderRadius]);

  // state - webtheme
  const [webTheme, setWebTheme] = useState(customization.mode);

  useEffect(() => {
    let newTheme = webTheme;
    dispatch({ type: SET_THEME, mode: newTheme });
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  }, [dispatch, webTheme]);

  // state - bg
  const [bg, setBg] = useState(customization.bg);

  useEffect(() => {
    let newBG = bg;
    dispatch({ type: SET_BG, bg: newBG });
    localStorage.setItem("background", newBG);
  }, [dispatch, bg]);

  const reset_default_setting = () => {
    setBorderRadius(config.borderRadius);
    localStorage.setItem("borderRadius", config.borderRadius);

    setWebTheme(config.mode);
    localStorage.setItem("theme", config.mode);
    document.documentElement.setAttribute("data-theme", config.mode);

    setBg(config.bgColor);
    localStorage.setItem("background", config.bgColor);
  };
  return (
    <div>
      <Grid container spacing={gridSpacing} sx={{ p: 3 }}>
        <Grid container spacing={2} xs={12}>
          <Grid item xs={12} md={6}>
            <SubCard
              title={
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "50px",
                  }}
                >
                  <Typography gutterBottom variant="h4" component="div">
                    Theme
                  </Typography>
                  <IconButton
                    onClick={() => {
                      if (webTheme === "dark") {
                        setWebTheme("light");
                        localStorage.setItem("theme", "light");
                        document.documentElement.setAttribute(
                          "data-theme",
                          "light"
                        );
                      } else {
                        setWebTheme("dark");
                        localStorage.setItem("theme", "dark");
                        document.documentElement.setAttribute(
                          "data-theme",
                          "dark"
                        );
                      }
                    }}
                  >
                    {webTheme !== "dark" ? (
                      <DarkModeIcon />
                    ) : (
                      <Brightness7Icon />
                    )}
                  </IconButton>
                </div>
              }
              content={
                <Grid
                  container
                  spacing={1}
                  alignItems="center"
                  justifyContent="center"
                >
                  {config.bgList.map((v, i) => {
                    return (
                      <div
                        className="base-example-bg"
                        onClick={() => {
                          setBg(v);
                          localStorage.setItem("background", v);
                        }}
                        style={
                          customization.bg === v
                            ? {
                                borderColor:
                                  customization.mode === "dark"
                                    ? "#42a5f5"
                                    : "#90caf9",
                                borderStyle: "solid",
                              }
                            : null
                        }
                      >
                        <div
                          className="overlay-bg"
                          style={{
                            background: config.bgMap(customization.mode, v),
                          }}
                        ></div>
                      </div>
                    );
                  })}
                </Grid>
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <SubCard
              title={
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "50px",
                  }}
                >
                  <Typography gutterBottom variant="h4" component="div">
                    Card Border Radius
                  </Typography>
                </div>
              }
              content={
                <Grid
                  item
                  xs={12}
                  container
                  spacing={2}
                  alignItems="center"
                  sx={{ mt: 2.5 }}
                >
                  <Grid item>
                    <Typography variant="h6" color="text.secondary">
                      10px
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Slider
                      size="small"
                      value={borderRadius}
                      onChange={handleBorderRadius}
                      getAriaValueText={valueText}
                      valueLabelDisplay="on"
                      aria-labelledby="discrete-slider-small-steps"
                      marks
                      step={1}
                      min={10}
                      max={24}
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" color="text.secondary">
                      24px
                    </Typography>
                  </Grid>
                </Grid>
              }
            />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Button onClick={reset_default_setting}>RESET</Button>
        </Grid>
      </Grid>
    </div>
  );
}
