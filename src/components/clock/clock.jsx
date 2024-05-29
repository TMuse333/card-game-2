import React, { useEffect, useState } from 'react';
import { useGameContext } from '../context';
import './clock.css'

const Clock = () => {


  const [countDownStarted, setCountdownStarted] = useState(false)

  const {gameStarted,countdown} = useGameContext()



  useEffect(() => {
    setCountdownStarted(gameStarted);

  }, [gameStarted]);

 
  
  
  

  return <div className="clock-container">

  <h2>Time remaining</h2>
  <span>{countdown}</span>

  </div>;
};

export default Clock;
