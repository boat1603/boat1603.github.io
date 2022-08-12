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
const Synapespage = Loadable(
  lazy(() => import("./../pages/workPages/SynapesPage"))
);
const Aipenpage = Loadable(
  lazy(() => import("./../pages/workPages/AipenPage"))
);
const Bsepage = Loadable(lazy(() => import("./../pages/workPages/BsePage")));
const Mfecpage = Loadable(lazy(() => import("./../pages/workPages/MfecPage")));

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
      path: "/work",
      children: [
        // {
        //   path: "",
        //   element: <Pythonskillspage />,
        // },
        {
          path: "synapes",
          element: <Synapespage />,
        },
        {
          path: "aipen",
          element: <Aipenpage />,
        },
        {
          path: "bse",
          element: <Bsepage />,
        },
        {
          path: "mfec",
          element: <Mfecpage />,
        },
      ],
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
