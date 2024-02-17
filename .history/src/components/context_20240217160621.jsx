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
  const [startGame, setStartGame] = useState(false);
  const [countdown, setCountdown] = useState(10);

  console.log('start game context', startGame);

  const startNewGame = () => {
    console.log('new game being started');
    setStartGame(true);
    setCountdown(10); // Reset the countdown when starting a new game
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (startGame) {
        setRandomNumber(getRandomNumber());
        setShuffledIndexes(shuffleCards());
        // Countdown logic
        
      }
    }, 11000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [startGame]);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); 


  //   let intervalId;

  //   if (startGame) {
  //     intervalId = setInterval(() => {
       
  //       setCountdown((prevCount) => (prevCount > 0 ? prevCount - 1 : 10));
  //     }, 1000);
  //   }

  //   return () => clearInterval(intervalId);
  // }, [startGame,]);

  const contextValue = {
    shuffleCards,
    getRandomNumber,
    randomNumber,
    shuffledIndexes,
    startNewGame,
    setStartGame,
    countdown,
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
