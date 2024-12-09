import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, user, isLoaded } = useUser();
  if (isLoaded && !isSignedIn) {
    return <Navigate to="/?sign-in=true" />;
  }
  return children;
};

export default ProtectedRoute;
