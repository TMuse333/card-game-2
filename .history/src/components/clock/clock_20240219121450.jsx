import React, { useEffect, useState } from 'react';
import { useGameContext } from '../context';
import './clock.css'

const Clock = () => {
  const [countdown, setCountdown] = useState(30);

  const [countDownStarted, setCountdownStarted] = useState(false)

  const {gameStarted} = useGameContext()



  useEffect(() => {
    setCountdownStarted(gameStarted);

  }, [gameStarted]);

  useEffect(() => {
    let intervalId;
  
    if (gameStarted) {
      setCountdown(30);
  
      intervalId = setInterval(() => {
        setCountdown((prevCount) => (prevCount > 1 ? prevCount - 1 : 0));
  
        if (prevCount === 1) {
          clearInterval(intervalId);
          setGameStarted(false);
          setTotalScore(0);
          // Additional logic for when the time limit is reached
          // This could include ending the game or resetting the state
        }
      }, 1000);
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
