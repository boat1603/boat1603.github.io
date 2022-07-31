import { lazy } from "react";

// project imports
import MainLayout from "./../layout/MainLayout";
// import Loadable from "./../ui-component/Loadable";

// dashboard routing
// const DashboardDefault = Loadable(
//   lazy(() => import("./../views/dashboard/Default"))
// );

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      // element: <DashboardDefault />,
      element: <div>Hello World</div>,
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
