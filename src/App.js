import React from "react";
import { useSelector } from "react-redux";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import NavigationScroll from "./layout/NavigationScroll";

import { theme } from "./themes";

import Routes from "./routes";

import { motion } from "framer-motion";

const App = () => {
  const customization = useSelector((state) => state.customization);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme(customization)}>
        <CssBaseline />
        <Content customization={customization} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customization: props.customization,
    };
  }
  componentDidMount() {
    document.documentElement.setAttribute(
      "data-theme",
      this.state.customization.mode
    );
  }
  render() {
    return (
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0.25, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </motion.div>
    );
  }
}
