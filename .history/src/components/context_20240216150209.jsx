import React, { createContext, useContext, useState } from 'react';

// Create a context with an initial value (initial value doesn't include gameState)
const GameContext = createContext();

// Create a provider component to wrap the part of your app that needs access to the context
export const GameProvider = ({ children }) => {
  // Function to shuffle cards
  const shuffleCards = (cards,setShuffledCards,) => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);

   
  };

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 8);
  };

  return (
    <GameContext.Provider value={{ shuffleCards }}>
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
