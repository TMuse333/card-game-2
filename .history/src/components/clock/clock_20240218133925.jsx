import React, { useEffect, useState } from 'react';
import { useGameContext } from '../context';

const Clock = () => {
  const [countdown, setCountdown] = useState(10);

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
      setCountdown(10); // Start from 10
  
      intervalId = setInterval(() => {
        setCountdown((prevCount) => (prevCount > 1 ? prevCount - 1 : 10)); // Decrement instead of increment
      }, 1150);
    }
  
    // Clear the interval when the component unmounts or when the game stops
    return () => clearInterval(intervalId);
  }, [gameStarted]);
  
  

  return <div className="clock-container">
    <div className='small-clock'>
        {countdown}
    </div>
    
  </div>;
};

export default Clock;
