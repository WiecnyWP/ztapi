import { useEffect, useState } from "react";
import axios from "axios";

export function useFetch({ url, method, axiosData }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);

        const response = await axios({
          method: method ? "post" : "get",
          url,
          data: axiosData,
        });
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, error, loading };
}
