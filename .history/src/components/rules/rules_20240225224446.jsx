import React, { useState } from 'react';
import { useGameContext } from '../context';
import './rules.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons

const Rules = () => {
  const rulesList = [
    'Welcome to the Quantum Card Game! This is a card game where you can test your memory and reaction time while viewing some quality art. '+
    '',
    'There are 8 cards, each card has a unique pokemon on the back of it, you can click on the card to flip it and click it again to flip it back, memorize which pokemon is on the back on each card',
    'When the game starts, one of the pokemon will randomly appear above the 8 cards. The objective of the game is to select the card that has the pokemon on top the screen as quickly as possible. The quicker you answer, the more points you get',
    'After every turn the cards will be reshuffled and a new random pokemon will be selected for you to match. Memorizing the positions of each pokemon will not work memorize which card has which pokemon because they will move every turn.',
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
    <>
   <div className='rules-wrapper'>

   
    <div className='rules-container'>
         <button onClick={handlePreviousRule} disabled={currentRule === 0}>
          <FaChevronLeft />
        </button>
    

    
      <p>{rulesList[currentRule]}</p>

      
   
       



  
      <button onClick={handleNextRule} disabled={currentRule === rulesList.length - 1}>
          <FaChevronRight />
        </button>

    </div>
    </div>
   
    </>
  );
};

export default Rules;
