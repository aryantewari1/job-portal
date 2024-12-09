import AppLayout from "@/layout/app-layout";
import JobsListing from "@/pages/jobs-listing";
import JobsPosting from "@/pages/jobs-posting";
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
      {
        path: "/jobs",
        element: <JobsListing />,
      },
      {
        path: "/post-job",
        element: <JobsPosting />,
      },
    ],
  },
]);

export default routes;
