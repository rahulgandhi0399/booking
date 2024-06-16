import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  console.log(url,"123")
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        
        const res = await axios.get(`api${url}`);
        console.log(res.data,"response",url);
        setData(res.data);
      } catch (err) {
        console.log("error",err)
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
