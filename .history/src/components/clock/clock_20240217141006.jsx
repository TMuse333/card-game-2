import React, { useState, useEffect } from "react";
import './clock.css'
const Clock = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount > 0) {
          // If the countdown is still running, decrement the count
          return prevCount - 1;
        } else {
          // If the countdown reaches 0, reset it to 10 and wait for the delay
          setTimeout(() => {
            setCount(10); // Reset to 10 after the delay
          }, 800);
          return prevCount; // Keep the count unchanged during the delay
        }
      });
    }, 1000);
  
    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount
  

  return <div 
  className="clock-container"
  >{count}</div>;
};

export default Clock;
