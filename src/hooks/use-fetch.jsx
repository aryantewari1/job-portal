/* eslint-disable react-hooks/rules-of-hooks */
import { useSession } from "@clerk/clerk-react";
import { useState } from "react";

const useFetch = (cb, options = {}) => {
  const { session } = useSession();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fn = async (...args) => {
    try {
      const supabaseToken = await session.getToken({
        template: "supabase",
      });
      const response = await cb(supabaseToken, options, ...args);
      setData(response);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };
  return { fn, data, loading, error };
};

export default useFetch;
