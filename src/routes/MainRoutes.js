import { lazy } from "react";

// project imports
import MainLayout from "./../layout/MainLayout";
import Loadable from "./../ui-component/Loadable";

// dashboard routing
const Homepage = Loadable(lazy(() => import("./../pages/HomePage")));
const Settingpage = Loadable(lazy(() => import("./../pages/SettingPage")));
const Downloadpage = Loadable(lazy(() => import("./../pages/DownloadPage")));
const Portfoliopage = Loadable(lazy(() => import("./../pages/PortfolioPage")));
const Coursespage = Loadable(lazy(() => import("./../pages/CoursesPage")));
const Hackathonpage = Loadable(lazy(() => import("./../pages/HackathonPage")));
const Pythonskillspage = Loadable(
  lazy(() => import("../pages/content/Skills/Programming/PythonSkills"))
);

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/portfolio",
      element: <Portfoliopage />,
    },
    {
      path: "/courses",
      element: <Coursespage />,
    },
    {
      path: "/hackathon",
      element: <Hackathonpage />,
    },
    {
      path: "/setting",
      element: <Settingpage />,
    },
    {
      path: "/downloads",
      element: <Downloadpage />,
    },
    {
      path: "/dashboard",
      element: <div></div>,
    },
    {
      path: "/programming",
      children: [
        {
          path: "",
          element: <Pythonskillspage />,
        },
        {
          path: "python",
          element: <Pythonskillspage />,
        },
      ],
    },
    {
      path: "/framework",
      children: [
        {
          path: "",
          element: <div></div>,
        },
        {
          path: "Tensorflow",
          element: <div>Hello World Tensorflow</div>,
        },
      ],
    },
  ],
};

export default MainRoutes;
