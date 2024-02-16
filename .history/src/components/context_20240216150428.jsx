import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context with an initial value (initial value doesn't include gameState)
const GameContext = createContext();

// Create a provider component to wrap the part of your app that needs access to the context
export const GameProvider = ({ children }) => {
  const [cards, setCards] = useState(/* initial cards state here */);

  // Function to shuffle cards
  const shuffleCards = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  };

  // Function to get a random number
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 8);
  };

  // Function to shuffle cards and get a random number every 11 seconds
  const shuffleAndRandomize = () => {
    shuffleCards();
    const randomNum = getRandomNumber();
    console.log('Shuffled and got random number:', randomNum);
  };

  useEffect(() => {
    // Set up an interval to call shuffleAndRandomize every 11 seconds
    const intervalId = setInterval(shuffleAndRandomize, 11000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [cards]); // Re-run the effect when cards change

  return (
    <GameContext.Provider value={{ shuffleCards, getRandomNumber }}>
      {children}
    </GameContext.Provider>
  );
};

// Create a custom hook to use the context
export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};
