import React, { useState, useEffect } from "react";
import './clock.css'
const Clock = () => {
  const [count, setCount] = useState(10);


  

  return <div 
  className="clock-container"
  >{count}</div>;
};

export default Clock;
