import AppLayout from "@/layout/app-layout";
import JobsListing from "@/pages/jobs-listing";
import JobsPosting from "@/pages/jobs-posting";
import LandingPage from "@/pages/landing-page";
import Onboarding from "@/pages/onboarding";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./protected-route";
import SavedJobs from "@/pages/saved-jobs";
import MyJobs from "@/pages/my-jobs";
import Job from "@/pages/job";

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
      {
        path: "/saved-jobs",
        element: (
          <ProtectedRoute>
            <SavedJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-jobs",
        element: (
          <ProtectedRoute>
            <MyJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/job/:id",
        element: (
          <ProtectedRoute>
            <Job />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default routes;
