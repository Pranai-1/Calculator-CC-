import React, { useEffect, useState } from "react";

const Practice = () => {
  const [data, setData] = useState(0);
  const [x, setX] = useState(0);

  useEffect(() => {
    const dataInterval = setInterval(() => {
      setData((prev) => prev + 1);
    }, 5000);

    return () => {
      clearInterval(dataInterval);
    };
  }, []);

  useEffect(() => {
    const xInterval = setInterval(() => {
      setX((prev) => prev + 1);
    }, 2000);

    return () => {
      clearInterval(xInterval);
    };
  }, []);

  console.log(data);
  console.log(x);

  return (
    <div>
      <div className="font-bold text-xl w-full text-center">{data}</div>
      <p>{x}</p>
    </div>
  );
};

export { Practice };
