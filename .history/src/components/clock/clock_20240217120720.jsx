import React, { useState, useEffect } from "react";
import './clock.css'
const Clock = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 10));
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return <div 
  className="clock-container"
  >{count}</div>;
};

export default Clock;
