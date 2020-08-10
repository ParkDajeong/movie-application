import { useState, useEffect } from "react";

export default (value, delay) => {
  const [data, setData] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setData(value), delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return data;
};
