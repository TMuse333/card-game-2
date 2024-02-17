import React, { useState, useEffect } from "react";
import './clock.css'
const Clock = () => {
  const [count, setCount] = useState(10);

 ependency array ensures the effect runs only once on mount
  

  return <div 
  className="clock-container"
  >{count}</div>;
};

export default Clock;
