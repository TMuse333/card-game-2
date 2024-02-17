import React, { createContext, useContext, useState, useEffect } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const shuffleCards = () => {
    return Array.from({ length: 8 }, (_, index) => index)
      .sort(() => Math.random() - 0.5);
  };

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 8);
  };

  const [randomNumber, setRandomNumber] = useState(getRandomNumber);
  const [shuffledIndexes, setShuffledIndexes] = useState(shuffleCards());
  const [initialShuffleComplete, setInitialShuffleComplete] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRandomNumber(getRandomNumber());
      setShuffledIndexes(shuffleCards());
    }, 11000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [initialShuffleComplete]); // Dependency array includes initialShuffleComplete

  useEffect(() => {
    // Delay the initial shuffle by 11 seconds
    const initialShuffleTimeout = setTimeout(() => {
      setInitialShuffleComplete(true);
    }, 11000);

    return () => clearTimeout(initialShuffleTimeout);
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <GameContext.Provider value={{ shuffleCards, getRandomNumber, randomNumber, shuffledIndexes }}>
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
