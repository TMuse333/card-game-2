import React from 'react';
import { useGameContext } from '../context';
import './rules.css'

const Rules = () => {
  // Define an array of rules
  const rulesList = [
    'Rule 1: Your first rule here.',
    'Rule 2: Your second rule here.',
    'Rule 3: Your third rule here.',
    // Add more rules as needed
  ];

  const {setViewRules } = useGameContext()

  return (
    <div className='rules-container'>
        Welcome to the Quantum Card game! Each card has a backside,
        memorize them all, once the game starts, one of the back images of the Cards
        will be displayed at the top of the screen and you must match
        it with the correspoinding card quickly, the faster you answer
      <div className='rules-slider'>
        {rulesList.map((rule, index) => (
          <div key={index} className='rule-slide'>
            <p>{rule}</p>
          </div>
        ))}
      </div>
      <button
      onClick={()=>{
        setViewRules(false)
      }}>
        Return
      </button>
    </div>
  );
};

export default Rules;
