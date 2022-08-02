import { lazy } from "react";

// project imports
import MainLayout from "./../layout/MainLayout";
import Loadable from "./../ui-component/Loadable";

// dashboard routing
const Homepage = Loadable(lazy(() => import("./../pages/HomePage")));
const Settingpage = Loadable(lazy(() => import("./../pages/SettingPage")));
const Downloadpage = Loadable(lazy(() => import("./../pages/DownloadPage")));
const Certificatepage = Loadable(
  lazy(() => import("./../pages/CertificatePage"))
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
      element: <div></div>,
    },
    {
      path: "/certificates",
      element: <Certificatepage />,
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
      // children: [
      //   {
      //     path: "default",
      //     element: <div>Hello World</div>,
      //   },
      // ],
    },
  ],
};

export default MainRoutes;
