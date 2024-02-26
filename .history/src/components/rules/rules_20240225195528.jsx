import React, { useState } from 'react';
import { useGameContext } from '../context';
import './rules.css';

const Rules = () => {
  const rulesList = [
    'Rule 1: Your first rule here.',
    'Rule 2: Your second rule here.',
    'Rule 3: Your third rule here.',
    // Add more rules as needed
  ];

  const { setViewRules } = useGameContext();

  const [currentRule, setCurrentRule] = useState(0);

  const handleNextRule = () => {
    setCurrentRule((prevRule) => (prevRule < rulesList.length - 1 ? prevRule + 1 : prevRule));
  };

  const handlePreviousRule = () => {
    setCurrentRule((prevRule) => (prevRule > 0 ? prevRule - 1 : prevRule));
  };

  return (
    <div className='rules-container'>
      <p>{rulesList[currentRule]}</p>

      <div className='navigation-buttons'>
        <button onClick={handlePreviousRule} disabled={currentRule === 0}>
          Previous Rule
        </button>
        <button onClick={handleNextRule} disabled={currentRule === rulesList.length - 1}>
          Next Rule
        </button>
      </div>

      <button
        onClick={() => {
          setViewRules(false);
        }}
      >
        Return
      </button>
    </div>
  );
};

export default Rules;
