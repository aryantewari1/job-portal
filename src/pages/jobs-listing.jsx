import { getJobs } from "@/api/apiJobs";
import useFetch from "@/hooks/use-fetch";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

const JobsListing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [company_id, setCompany_id] = useState("");
  const { isLoaded } = useUser();

  const { fn, data } = useFetch(getJobs, {});

  console.log(data);
  useEffect(() => {
    if (isLoaded) fn();
  }, [isLoaded, searchQuery, location, company_id]);

  if (!isLoaded) return;
  return <div>jobs-listing</div>;
};

export default JobsListing;
