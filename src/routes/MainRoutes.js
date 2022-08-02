import { lazy } from "react";

// project imports
import MainLayout from "./../layout/MainLayout";
import Loadable from "./../ui-component/Loadable";

// dashboard routing
const Homepage = Loadable(lazy(() => import("./../pages/HomePage")));
const Settingpage = Loadable(lazy(() => import("./../pages/SettingPage")));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      // element: <DashboardDefault />,
      element: <Homepage />,
    },
    {
      path: "/portfolio",
      // element: <DashboardDefault />,
      element: <div></div>,
    },
    {
      path: "/certificates",
      // element: <DashboardDefault />,
      element: <div></div>,
    },
    {
      path: "/setting",
      // element: <DashboardDefault />,
      element: <Settingpage />,
    },
    {
      path: "/dashboard",
      element: <div></div>,
      children: [
        {
          path: "default",
          // element: <DashboardDefault />,
          element: <div>Hello World</div>,
        },
      ],
    },
  ],
};

export default MainRoutes;
