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
  const [randomCard, setRandomCard] = useState(cards[randomNumber]);
  const [timer, setTimer] = useState(false);


  const [points, setPoints] = useState(100);
  const [totalScore, setTotalScore] = useState(0)

  const [countDownInit]


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
    let startTime;
  
    if (gameStarted === true) {


     
  
      if (cardsMatch !== null) {
        if (cardsMatch === true) {
          console.log('Cards match!');
         
        } else if (cardsMatch === false) {
          console.log("Cards don't match");
        }
  
     
        setTimeout(() => {

      
          setCardsMatch(null);
         
  if(gameStarted){
    setRandomNumber(getRandomNumber());
    setRandomCard(cards[randomNumber]);
    setPoints(100);
  }
       
        }, 1000);
  
        
      }

      startTime = performance.now();
  
  
    }
  
    // Cleanup the timer when the component unmounts or when the game ends
    return () => {
      // clearTimeout(gameTimer);
      console.log('Timer cleared!');
    };
  }, [gameStarted, cardsMatch, getRandomNumber, randomNumber, randomCard, setShuffledIndexes, points]);
  
  
  const [countdown, setCountdown] = useState(10);
  const [gameCompleted, setGameCompleted ] = useState(false)

  useEffect(() => {
    let intervalId;
  
    if (gameStarted) {
      setCountdown(60);
  
      intervalId = setInterval(() => {
        setCountdown((prevCount) => {
          if (prevCount > 1) {
            return prevCount - 1;
          } else {
            clearInterval(intervalId);
            setGameStarted(false);
            // setTotalScore(0);
            setGameCompleted(true)
            console.error('The game is over',setGameCompleted);
            // Additional logic for when the time limit is reached
            // This could include ending the game or resetting the state
            return 0; // Ensure countdown is set to 0 after reaching the limit
          }
        });
      }, 1000);
    }
  
    // Cleanup the interval when the component unmounts or when the game ends
    return () => {
      clearInterval(intervalId);
      console.log('Countdown Timer cleared!');
    };
  }, [gameStarted, setGameStarted, setTotalScore]);
  

  const [viewCardsClicked, setViewCardsClicked] =
  useState(false)

  const [viewRules, setViewRules] = useState(false)

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
    totalScore,
    countdown,
    gameCompleted,
    setGameCompleted,
    viewCardsClicked,
    setViewCardsClicked,
    viewRules,
    setViewRules
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