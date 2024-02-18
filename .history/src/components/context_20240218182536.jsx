import React, { createContext, useContext, useState, useEffect } from 'react';
import charizard from '../media/charizard.gif';
import deoxys from '../media/deoxys.gif';
import gengar from '../media/gengar.gif';
import mewtwo from '../media/mewtwo.gif';
import pikachu from '../media/pikachu.gif';
import rayquaza from '../media/rayquaza.gif';
import sudowudo from '../media/sudowudo.gif';
import blazekin from '../media/blazekin.gif';

const GameContext = createContext();

export const GameProvider = ({ children }) => {


  const shuffleCards = () => {
    const indexes = Array.from({ length: 8 }, (_, index) => index);
    return [...indexes].sort(() => Math.random() - 0.5);
  };
  

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 8);
  };

  const cards = [mewtwo, deoxys, charizard, sudowudo, gengar, pikachu, rayquaza, blazekin];

  const [randomNumber, setRandomNumber] = useState(getRandomNumber);
  const [shuffledIndexes, setShuffledIndexes] = useState([0,1,2,3,4,5,6,7]);
  const [gameStarted, setGameStarted] = useState(false);
  const [cardsMatch, setCardsMatch] = useState(null);
  const [randomCard, setRandomCard] = useState(cards[0]);
  const [timer, setTimer] = useState(false);


  const [points, setPoints] = useState(100);
  const [totalScore, setTotalScore] = useState(0)

  useEffect(() => {
    let decrementInterval;

    if (gameStarted) {
      decrementInterval = setInterval(() => {

        setPoints((prevPoints) => (prevPoints > 10 ? prevPoints - 10 : 10));
        // console.log('current points',points)
      }, 2000);
    }

    return () => clearInterval(decrementInterval);
  }, [gameStarted,points]); 


  useEffect(() => {
    let gameTimer;

    if (gameStarted === true) {
      if (cardsMatch !== null) {
        if (cardsMatch === true) {
          console.log('Cards match!');
          // setTotalScore((prevTotalScore) => prevTotalScore + points);
          set
         
        } else if (cardsMatch === false) {
          console.log("Cards don't match");
        }

        // Introduce a 3-second delay before resetting cards, random number, and random card
        setTimeout(() => {
          setCardsMatch(null);
          // setShuffledIndexes(shuffleCards());

console.log('time for a new number...')
          setRandomNumber(getRandomNumber());
          setRandomCard(cards[randomNumber]);
          setPoints(100)
        }, 3000);

        // Reset the timer state
        setTimer(false);
      }

      // Start a 60-second timer when the game starts
      gameTimer = setTimeout(() => {
        console.log('Time up!');
        setGameStarted(false)
        // Add any additional logic for when the time limit is reached
        // This could include ending the game or resetting the state
      }, 15000);
    }

    // Cleanup the timer when the component unmounts or when the game ends
    return () => clearTimeout(gameTimer);
  }, [gameStarted, cardsMatch, getRandomNumber, randomNumber, randomCard,setShuffledIndexes,points]);



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
    setRandomNumber,
    points,
    setTotalScore,
    totalScore
  };

  return <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>;
};

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};
