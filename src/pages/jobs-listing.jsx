import { getJobs } from "@/api/apiJobs";
import { useSession } from "@clerk/clerk-react";
import { useEffect } from "react";

const JobsListing = () => {
  const { session } = useSession();
  const fetchJobs = async () => {
    const supabaseToken = await session.getToken({
      template: "supabase",
    });
    const data = await getJobs(supabaseToken);
    console.log(data);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  return <div>jobs-listing</div>;
};

export default JobsListing;
