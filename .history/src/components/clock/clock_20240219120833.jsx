import React, { useEffect, useState } from 'react';
import { useGameContext } from '../context';
import './clock.css'

const Clock = () => {
  const [countdown, setCountdown] = useState(30);

  const [countDownStarted, setCountdownStarted] = useState(false)

  const {gameStarted} = useGameContext()



  useEffect(() => {
    setCountdownStarted(gameStarted);
// console.log('clock is smart',)
  }, [gameStarted]);

  useEffect(() => {
    let intervalId;
  
    if (gameStarted) {
    //   console.log('lets get it started!');
      setCountdown(30); // Start from 10
  
      intervalId = setInterval(() => {
        setCountdown((prevCount) => (prevCount > 1 ? prevCount - 1 : 30)); // Decrement instead of increment
      }, 1750);
    }
  
    // Clear the interval when the component unmounts or when the game stops
    return () => clearInterval(intervalId);
  }, [gameStarted]);
  
  

  return <div className="clock-container">

  <h2>Time remaining</h2>
  <span>{countdown}</span>

  </div>;
};

export default Clock;
