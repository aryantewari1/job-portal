import AppLayout from "@/layout/app-layout";
import LandingPage from "@/pages/landing-page";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
]);

export default routes;
