import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Button,
  Drawer,
  Fab,
  Grid,
  IconButton,
  Slider,
  Tooltip,
  Typography,
} from "@mui/material";
import { IconSettings } from "@tabler/icons";

// third-party
import PerfectScrollbar from "react-perfect-scrollbar";

// project imports
import SubCard from "./../../ui-component/cards/SubCard";
import AnimateButton from "./../../ui-component/extended/AnimateButton";
import { SET_BORDER_RADIUS, SET_THEME } from "./../../store/actions";
import { gridSpacing } from "./../../store/constant";

import config from "./../../config";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness7Icon from "@mui/icons-material/Brightness7";

// concat 'px'
function valueText(value) {
  return `${value}px`;
}

// ==============================|| LIVE CUSTOMIZATION ||============================== //

const Customization = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const customization = useSelector((state) => state.customization);

  // drawer on/off
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

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
    let newTheme;
    switch (webTheme) {
      case `dark`:
        newTheme = "dark";
        break;
      case `light`:
      default:
        newTheme = "light";
        break;
    }
    dispatch({ type: SET_THEME, mode: newTheme });
    localStorage.setItem("theme", newTheme);
  }, [dispatch, webTheme]);
  const reset_default_setting = () => {
    setBorderRadius(config.borderRadius);
    localStorage.setItem("borderRadius", config.borderRadius);
    setWebTheme(config.mode);
    localStorage.setItem("theme", config.mode);
  };
  return (
    <>
      {/* toggle button */}
      <Tooltip title="Settings">
        <Fab
          component="div"
          onClick={handleToggle}
          size="medium"
          variant="circular"
          color="secondary"
          sx={{
            borderRadius: 0,
            borderTopLeftRadius: "50%",
            borderBottomLeftRadius: "50%",
            borderTopRightRadius: "50%",
            borderBottomRightRadius: "4px",
            top: "25%",
            position: "fixed",
            right: 10,
            zIndex: theme.zIndex.speedDial,
          }}
        >
          <AnimateButton type="rotate">
            <IconButton color="inherit" size="large" disableRipple>
              <IconSettings />
            </IconButton>
          </AnimateButton>
        </Fab>
      </Tooltip>

      <Drawer
        anchor="right"
        onClose={handleToggle}
        open={open}
        PaperProps={{
          sx: {
            width: 280,
          },
        }}
      >
        <PerfectScrollbar component="div">
          <Grid container spacing={gridSpacing} sx={{ p: 3 }}>
            <Grid item xs={12}>
              {/* border radius */}
              <SubCard title="Theme">
                <IconButton
                  onClick={() => {
                    if (webTheme === "dark") {
                      setWebTheme("light");
                      localStorage.setItem("theme", "light");
                    } else {
                      setWebTheme("dark");
                      localStorage.setItem("theme", "dark");
                    }
                  }}
                >
                  {webTheme !== "dark" ? <DarkModeIcon /> : <Brightness7Icon />}
                </IconButton>
              </SubCard>
            </Grid>
            <Grid item xs={12}>
              {/* border radius */}
              <SubCard title="Border Radius">
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
                      4px
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
                      step={2}
                      min={4}
                      max={24}
                      // color="secondary"
                      // sx={{
                      //   "& .MuiSlider-valueLabel": {
                      //     // color: "secondary.light",
                      //   },
                      // }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" color="text.secondary">
                      24px
                    </Typography>
                  </Grid>
                </Grid>
              </SubCard>
            </Grid>
            <Grid item xs={12}>
              <Button onClick={reset_default_setting}>RESET</Button>
            </Grid>
          </Grid>
        </PerfectScrollbar>
      </Drawer>
    </>
  );
};

export default Customization;
