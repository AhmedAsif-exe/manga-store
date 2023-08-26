import { useState } from "react";
function useHttp({ url, options }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("idle"); // "idle" | "pending" | "resolved" | "rejected"

  const fetchHandler = async (inGoingData) => {
    setStatus("pending");
    if (inGoingData) options.body = inGoingData;
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setData(data);
      setStatus("resolved");
    } catch (error) {
      setError(error);
      setStatus("rejected");
    }
  };

  return { data, error, status, fetchHandler };
}

export default useHttp;
