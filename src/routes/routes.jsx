import AppLayout from "@/layout/app-layout";
import JobsListing from "@/pages/jobs-listing";
import JobsPosting from "@/pages/jobs-posting";
import LandingPage from "@/pages/landing-page";
import Onboarding from "@/pages/onboarding";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./protected-route";

const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: (
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        ),
      },
      {
        path: "/jobs",
        element: (
          <ProtectedRoute>
            <JobsListing />
          </ProtectedRoute>
        ),
      },
      {
        path: "/post-job",
        element: (
          <ProtectedRoute>
            <JobsPosting />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default routes;
