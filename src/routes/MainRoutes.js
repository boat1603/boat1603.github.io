import { lazy } from "react";
import { Navigate } from "react-router-dom";

import MainLayout from "./../layout/MainLayout";
import Loadable from "./../ui-component/Loadable";

const Homepage = Loadable(lazy(() => import("./../pages/HomePage")));
const ExperiencePage = Loadable(lazy(() => import("./../pages/ExperiencePage")));
const ProjectsPage = Loadable(lazy(() => import("./../pages/ProjectsPage")));
const Settingpage = Loadable(lazy(() => import("./../pages/SettingPage")));
const Coursespage = Loadable(lazy(() => import("./../pages/CoursesPage")));
const Hackathonpage = Loadable(lazy(() => import("./../pages/HackathonPage")));
const Pythonskillspage = Loadable(
  lazy(() => import("../pages/content/Skills/Programming/PythonSkills"))
);
const Looloopage = Loadable(
  lazy(() => import("./../pages/workPages/LoolooPage"))
);
const Synapespage = Loadable(
  lazy(() => import("./../pages/workPages/SynapesPage"))
);
const Aipenpage = Loadable(
  lazy(() => import("./../pages/workPages/AipenPage"))
);
const Bsepage = Loadable(lazy(() => import("./../pages/workPages/BsePage")));
const Mfecpage = Loadable(lazy(() => import("./../pages/workPages/MfecPage")));

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/experience",
      element: <ExperiencePage />,
    },
    {
      path: "/projects",
      element: <ProjectsPage />,
    },
    {
      path: "/resume",
      element: <Navigate replace to="/" />,
    },
    {
      path: "/portfolio",
      element: <Navigate replace to="/projects" />,
    },
    {
      path: "/timeline",
      element: <Navigate replace to="/experience" />,
    },
    {
      path: "/downloads",
      element: <Navigate replace to="/" />,
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
      path: "/dashboard",
      element: <Navigate replace to="/" />,
    },
    {
      path: "/work",
      children: [
        {
          path: "looloo",
          element: <Looloopage />,
        },
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
      path: "*",
      element: <Navigate replace to="/" />,
    },
  ],
};

export default MainRoutes;
