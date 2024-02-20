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

  const {setViewRules }

  return (
    <div className='rules-container'>
      <div className='rules-slider'>
        {rulesList.map((rule, index) => (
          <div key={index} className='rule-slide'>
            <p>{rule}</p>
          </div>
        ))}
      </div>
      <button>
        Return
      </button>
    </div>
  );
};

export default Rules;
