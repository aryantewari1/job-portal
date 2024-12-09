import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const JobsPosting = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.unsafeMetadata?.role === "seeker") {
      navigate("/");
    }
  }, [user]);
  return <div> JobsPosting</div>;
};

export default JobsPosting;
