import Brightness7Icon from "@mui/icons-material/Brightness7";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import { SET_THEME } from "./../../store/actions";

export default function NavBar({ handleMenubar, isMobile, navItems }) {
  const dispatch = useDispatch();
  const customization = useSelector((state) => state.customization);
  const isDark = customization.mode === "dark";
  const nextMode = isDark ? "light" : "dark";

  const handleThemeToggle = () => {
    dispatch({ type: SET_THEME, mode: nextMode });
    localStorage.setItem("theme", nextMode);
    document.documentElement.setAttribute("data-theme", nextMode);
  };

  return (
    <header className="page-navbar">
      <Link className="brand-link" to="/">
        <span className="brand-mark">PR</span>
        <span>
          <span className="brand-name">Peerawat Rojratchadakorn</span>
          <span className="brand-role">Senior AI Engineer</span>
        </span>
      </Link>

      {isMobile ? (
        <div className="nav-actions mobile-nav-actions">
          <IconButton
            aria-label={`Switch to ${nextMode} theme`}
            className="theme-toggle"
            onClick={handleThemeToggle}
          >
            {isDark ? <Brightness7Icon /> : <DarkModeIcon />}
          </IconButton>
          <IconButton aria-label="Open navigation" onClick={handleMenubar}>
            <MenuIcon />
          </IconButton>
        </div>
      ) : (
        <div className="desktop-nav-wrap">
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "portfolio-nav-link portfolio-nav-link-active"
                    : "portfolio-nav-link"
                }
                end={item.path === "/"}
                key={item.path}
                to={item.path}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="nav-actions">
            <IconButton
              aria-label={`Switch to ${nextMode} theme`}
              className="theme-toggle"
              onClick={handleThemeToggle}
            >
              {isDark ? <Brightness7Icon /> : <DarkModeIcon />}
            </IconButton>
            <NavLink
              aria-label="Open settings"
              className={({ isActive }) =>
                isActive
                  ? "portfolio-icon-nav-link portfolio-icon-nav-link-active"
                  : "portfolio-icon-nav-link"
              }
              to="/setting"
            >
              <SettingsIcon fontSize="small" />
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
