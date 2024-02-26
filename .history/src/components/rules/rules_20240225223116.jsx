import React, { useState } from 'react';
import { useGameContext } from '../context';
import './rules.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons

const Rules = () => {
  const rulesList = [
    'Welcome to the Quantum Card Game! This is a card game where you can test your memory and reaction time while viewing some quality art. '+
    '',
    'There are 8 cards, each card has a unique pokemon on the back of it, you can click on the card to flip it and click it again to flip it back, memorize which pokemon is on the back on each card',
    'When the game starts, one of the pokemon will randomly appear on the top of',
    'After every turn the cards will be reshuffled so simply memorizing the positions of each pokemon will not work memorize which card has which pokemon because they will move every turn.',
    'Your goal is to score 1500 points, that is considered an ultra instinct type of performance, which is needed in everyday life to succeed. 1499 to 500 is a respectable effort but anything below is considered unacceptable and must be improved upon. You have 45 seconds to score as much as you can, focus and perform to the best of your capabilities.'
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
      <div className='rules-contents'>

    
      <p>{rulesList[currentRule]}</p>

      <div className='navigation-buttons'>
      <button onClick={handlePreviousRule} disabled={currentRule === 0}>
          <FaChevronLeft />
        </button>
        <button onClick={handleNextRule} disabled={currentRule === rulesList.length - 1}>
          <FaChevronRight />
        </button>
      </div>


      </div>
      <button className='bottom-rule-button'
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
