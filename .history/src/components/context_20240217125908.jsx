import React, { createContext, useContext, useState, useEffect } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const shuffleCards = (cards, setShuffledCards) => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
  };

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 8);
  };

  const [randomNumber, setRandomNumber] = useState(getRandomNumber);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRandomNumber(getRandomNumber());
    }, 11000);

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <GameContext.Provider value={{ shuffleCards, getRandomNumber, randomNumber }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};
