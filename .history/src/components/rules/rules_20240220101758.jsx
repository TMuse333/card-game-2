import React from 'react';

const Rules = () => {
  // Define an array of rules
  const rulesList = [
    'Rule 1: Your first rule here.',
    'Rule 2: Your second rule here.',
    'Rule 3: Your third rule here.',
    // Add more rules as needed
  ];

  return (
    <div className='rules-container'>
      <div className='rules-slider'>
        {rulesList.map((rule, index) => (
          <div key={index} className='rule-slide'>
            <p>{rule}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rules;
