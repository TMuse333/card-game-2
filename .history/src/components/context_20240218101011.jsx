import React, { createContext, useContext, useState, useEffect } from 'react';
import charizard from '../media/charizard.gif'
import deoxys from '../media/deoxys.gif'
import gengar from '../media/gengar.gif'
import mewtwo from '../media/mewtwo.gif'
import pikachu from '../media/pikachu.gif'
import rayquaza from '../media/rayquaza.gif'
import sudowudo from '../media/sudowudo.gif'
import blazekin from '../media/blazekin.gif'
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
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRandomNumber(getRandomNumber());
      setShuffledIndexes(shuffleCards());
    }, 11000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [gameStarted]);

  const contextValue = {
    shuffleCards,
    getRandomNumber,
    randomNumber,
    shuffledIndexes,
    gameStarted,
    setGameStarted,
  };

  return (
    <GameContext.Provider value={contextValue}>
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
