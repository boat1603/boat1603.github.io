import Brightness7Icon from "@mui/icons-material/Brightness7";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { Button, IconButton, Slider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import config from "../config";
import { SET_BG, SET_BORDER_RADIUS, SET_THEME } from "../store/actions";

function valueText(value) {
  return `${value}px`;
}

export default function SettingPage() {
  const dispatch = useDispatch();
  const customization = useSelector((state) => state.customization);
  const isDark = customization.mode === "dark";

  const setTheme = (mode) => {
    dispatch({ type: SET_THEME, mode });
    localStorage.setItem("theme", mode);
    document.documentElement.setAttribute("data-theme", mode);
  };

  const setBackground = (bg) => {
    dispatch({ type: SET_BG, bg });
    localStorage.setItem("background", bg);
  };

  const setBorderRadius = (borderRadius) => {
    dispatch({ type: SET_BORDER_RADIUS, borderRadius });
    localStorage.setItem("borderRadius", borderRadius);
  };

  const resetDefaultSetting = () => {
    setTheme(config.mode);
    setBackground(config.bgColor);
    setBorderRadius(config.borderRadius);
  };

  return (
    <div className="portfolio-page settings-page">
      <section className="page-intro">
        <p className="eyebrow">Settings</p>
        <h1>Theme and surface controls</h1>
        <p>
          Personalize the portfolio surface while keeping the redesigned layout
          clean and recruiter-friendly.
        </p>
      </section>

      <section className="settings-grid">
        <article className="settings-panel">
          <div className="settings-panel-header">
            <div>
              <p className="eyebrow">Theme</p>
              <h2>{isDark ? "Dark" : "Light"}</h2>
            </div>
            <IconButton
              aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
              className="theme-toggle theme-toggle-large"
              onClick={() => setTheme(isDark ? "light" : "dark")}
            >
              {isDark ? <Brightness7Icon /> : <DarkModeIcon />}
            </IconButton>
          </div>
          <div className="segmented-control" role="group" aria-label="Theme">
            {["dark", "light"].map((mode) => (
              <button
                className={customization.mode === mode ? "is-active" : ""}
                key={mode}
                onClick={() => setTheme(mode)}
                type="button"
              >
                {mode}
              </button>
            ))}
          </div>
        </article>

        <article className="settings-panel settings-panel-wide">
          <div className="settings-panel-header">
            <div>
              <p className="eyebrow">Background</p>
              <h2>{customization.bg}</h2>
            </div>
          </div>
          <div className="background-swatch-grid">
            {config.bgList.map((bg) => (
              <button
                aria-label={`Set ${bg} background`}
                className={
                  customization.bg === bg
                    ? "background-swatch is-active"
                    : "background-swatch"
                }
                key={bg}
                onClick={() => setBackground(bg)}
                style={{
                  background: config.bgMap(customization.mode, bg),
                }}
                type="button"
              >
                <span>{bg}</span>
              </button>
            ))}
          </div>
        </article>

        <article className="settings-panel">
          <div className="settings-panel-header">
            <div>
              <p className="eyebrow">Card radius</p>
              <h2>{customization.borderRadius}px</h2>
            </div>
          </div>
          <Slider
            aria-label="Card border radius"
            getAriaValueText={valueText}
            marks
            max={24}
            min={10}
            onChange={(event, value) => setBorderRadius(value)}
            size="small"
            step={1}
            value={customization.borderRadius}
            valueLabelDisplay="auto"
          />
        </article>
      </section>

      <div className="settings-actions">
        <Button
          onClick={resetDefaultSetting}
          startIcon={<RestartAltIcon />}
          variant="contained"
        >
          Reset defaults
        </Button>
      </div>
    </div>
  );
}
