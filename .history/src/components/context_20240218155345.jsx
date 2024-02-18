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



  const cards = [
    mewtwo,
    deoxys, charizard,
    sudowudo,
    gengar,
    pikachu,
    rayquaza,
    blazekin,
  ];

  const [randomNumber, setRandomNumber] = useState(getRandomNumber);
  const [shuffledIndexes, setShuffledIndexes] = useState([0,1,2,3,4,5,6,7]);
  const [gameStarted, setGameStarted] = useState(false);
  const [cardsMatch, setCardsMatch] = useState(null)

  const [randomCard, setRandomCard] = useState(cards[0] )

  const [timeLimitReached, setTimeLimitReached] = useState(false);
  const [inactivityTimer, setInactivityTimer] = useState(null);

  const [timer, setTimer] = useState(false);

  useEffect(() => {

    if()
    // Use setInterval to set isFiveSecondsPassed to true every 5 seconds
    const intervalId = setInterval(() => {
      setTimer(true);
      console.log('Timer has gone off!');
    }, 5000);
  
    // Cleanup the interval to avoid memory leaks
    return () => clearInterval(intervalId);
  }, []);
  

  useEffect(() => {
    let gameTimer;

    if (gameStarted) {
      if (cardsMatch !== null && !timeLimitReached) {
        if (cardsMatch === true) {
          console.log('Cards match!');
        } else if (cardsMatch === false) {
          console.log("Cards don't match");
        }

        // Introduce a 3-second delay before resetting cards, random number, and random card
        setTimeout(() => {
          setCardsMatch(null);
          setShuffledIndexes(shuffleCards());
          setRandomNumber(getRandomNumber());
          setRandomCard(cards[randomNumber]);
        }, 3000);
      }

      

      // Start a 60-second timer when the game starts
      gameTimer = setTimeout(() => {
        setTimeLimitReached(true);
        console.log('time up!')
        setGameStarted(false)
        // Add any additional logic for when the time limit is reached
        // This could include ending the game or resetting the state
      }, 15000);
    }

    // Cleanup the timer when the component unmounts or when the game ends
    return () => clearTimeout(gameTimer);
  }, [gameStarted, cardsMatch, timeLimitReached, shuffleCards, getRandomNumber, randomNumber, randomCard]);

  useEffect(() => {
    if (timer === true) {
      // Reshuffle cards, pick a new random number, and set cardsMatch to null
      setShuffledIndexes(shuffleCards());
      setRandomNumber(getRandomNumber());
      setRandomCard(cards[randomNumber]);
      setCardsMatch(null);
      setTimer(false); // Reset the timer state
    }
  }, [timer, shuffleCards, getRandomNumber, randomNumber, randomCard]);


  console.log('random card',randomCard)




  useEffect(()=>{
    console.log('cards match:',cardsMatch)

  },[cardsMatch])


 











  const contextValue = {
    shuffleCards,
    getRandomNumber,
    randomNumber,
    shuffledIndexes,
    gameStarted,
    setGameStarted,
    randomCard,
    cardsMatch,
    setCardsMatch,
    setRandomCard,
    setShuffledIndexes,
    setRandomNumber

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
