import React, { useState } from 'react';
import { useGameContext } from '../context';
import './rules.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons

const Rules = () => {
  const rulesList = [
    'Welcome to the Quantum Card Game! This is a card game where you can test your memory and reaction time while viewing some quality art. '+
    '',
    'There are 8 cards and when you click on them, they all have a unique pokemon on the back of them. It is essential the memorize each card, because when the game starts one of the pokemon will randomly appear on the screen and you will need to know which card has the corresponding pokemon and selected it quickly. The quicker you answer, the more points you get.',
    'After every turn the cards will be reshuffled so simply memorizing ',
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
