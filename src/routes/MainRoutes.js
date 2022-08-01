import { lazy } from "react";

// project imports
import MainLayout from "./../layout/MainLayout";
import Loadable from "./../ui-component/Loadable";

// dashboard routing
const Homepage = Loadable(lazy(() => import("./../pages/HomePage")));

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
      path: "dashboard",
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
