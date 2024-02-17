import React from "react";
import './clock.css';
import { useGameContext } from '../context';

const Clock = () => {
  const { countdown } = useGameContext();

  return (
    <div className="clock-container">
      <p>{countdown}</p>
    </div>
  );
};

export default Clock;
