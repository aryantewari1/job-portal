import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();
  const handleRoleSelection = async (role) => {
    await user
      .update({
        unsafeMetadata: { role },
      })
      .then(() => {
        navigate(role === "recruiter" ? "/post-job" : "/jobs");
      });
  };
  useEffect(() => {
    if (user?.unsafeMetadata?.role) {
      navigate(
        user.unsafeMetadata.role === "recruiter" ? "/post-job" : "/jobs"
      );
    }
  }, [user]);

  if (!isLoaded) return;

  return (
    <div className="flex flex-col justify-center items-center gap-9 sm:gap-14 pt-10 sm:pt-20">
      <h2 className="text-4xl px-4 pb-4 sm:text-6xl lg:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
        What are you?
      </h2>
      <div className="grid grid-cols-2 gap-5">
        <Button
          variant="pink"
          className="h-36 lg:w-80 text-3xl"
          onClick={() => handleRoleSelection("seeker")}
        >
          Seeker
        </Button>
        <Button
          className="h-36 lg:w-80 text-3xl"
          variant="bpink"
          onClick={() => handleRoleSelection("recruiter")}
        >
          Recruiter
        </Button>
      </div>
    </div>
  );
};

export default Onboarding;
