import React, { useEffect, useState } from 'react';
import { useGameContext } from '../context';

const Clock = () => {
  const { startGame } = useGameContext();
  const [countdown, setCountdown] = useState(10);

  console.log('start game from clock')

  useEffect(() => {
    let intervalId;

    if (startGame) {
      intervalId = setInterval(() => {
        setCountdown((prevCount) => (prevCount > 0 ? prevCount - 1 : 10));
      }, 1000);
    }

    // Clear the interval when the component unmounts or when the game stops
    return () => clearInterval(intervalId);
  }, [startGame]);

  return <div className="clock-container">{countdown}</div>;
};

export default Clock;
