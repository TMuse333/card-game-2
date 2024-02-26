import React, { createContext, useContext, useState, useEffect } from 'react';
import charizard from '../media/charizard.gif';
import deoxys from '../media/deoxys.gif';
import gengar from '../media/gengar.gif';
import mewtwo from '../media/mewtwo.gif';
import pikachu from '../media/pikachu.gif';
import rayquaza from '../media/rayquaza.gif';
import sudowudo from '../media/sudowudo.gif';
import blazekin from '../media/blazekin.gif';
import axios from "axios";

/*
This file manages and declares the states used throughout the
game like has the game started, the score ect.
They are then exported out of thus file with createContext
so then can be used throughout the other files
which need data from the game to operate


*/

const GameContext = createContext();

export const GameProvider = ({ children }) => {

  const [username,setUsername]= useState(null)
  const [leaderboardSelected, setLeaderboardSelected] = useState(false)

  







  /*A funtion that returns an array of indexes
  0-7 in a random order to shuffle the card set around every turn 
  and a random number generator to pick the random card*/

  const shuffleCards = () => {
    const indexes = Array.from({ length: 8 }, (_, index) => index);
    return [...indexes].sort(() => Math.random() - 0.5);
  };

  
  

  const getRandomNumber = (excludeNumber) => {
 
    const
  
  
     let newRandomNumber = Math.floor(Math.random() * 8);
 
     if(newRandomNumber === excludeNumber){
      return newRandomNumber % 2
     }
  
    return newRandomNumber;
  };



  //the cards that are to be matched

  const cards = [mewtwo, deoxys, charizard, sudowudo, gengar, pikachu, rayquaza, blazekin];



//the current random number for the random card
  const [randomNumber, setRandomNumber] = useState(getRandomNumber(0));
  const [randomCard, setRandomCard] = useState(cards[randomNumber]);



  //the order of which the cards are to be ordrerd in
  const [shuffledIndexes, setShuffledIndexes] = useState([0,1,2,3,4,5,6,7]);

  //represents whether the game has started or not
  const [gameStarted, setGameStarted] = useState(false);

  //represents if the card matches or not
  const [cardsMatch, setCardsMatch] = useState(null);

//represents the score of the current turn and total score of the game
  const [points, setPoints] = useState(100);
  const [totalScore, setTotalScore] = useState(0)

  //when the start button is pressed, there is an initial countdown until the game commences,
  //these states are used to start that countdown
  const [countDownInit, setCountDownInit] = useState(false)
  const [countDown, setCountDown] = useState(3)


  //these 2 useEffects are started when the 
  //start button is pressed, then 
  //there is a 3 second countdown for the game to start,
  //once the countdown is zero, the game starts

  useEffect(() => {
    let decrementInterval;

    if (countDownInit) {
      console.log('countdown initiated!')
      decrementInterval = setInterval(() => {
        setCountDown((prevCountDown) => (prevCountDown > 0 ? prevCountDown - 1 : 0));
      }, 1000);
    }

    return () => {
      clearInterval(decrementInterval);
    };
  }, [countDownInit]);

  useEffect(()=>{
    if(countDown === 0){
      setGameStarted(true)
      setCountDownInit(false)
    }
  },[countDown])

  /**
   * This useEffect is to determine how many points the user receives
   * on each turn.
   * Initially the user can get 100 points per
   * turn but it decrements by 10 points every second
   * rewarding more points for faster reaction time.
   */


  useEffect(() => {
    let decrementInterval;

    if (gameStarted && cardsMatch === null) {
      
      decrementInterval = setInterval(() => {

        setPoints((prevPoints) => (prevPoints > 10 ? prevPoints - 10 : 10));
        // console.log('current points',points)
      }, 2000);
    }

    return () => clearInterval(decrementInterval);
  }, [gameStarted,points,cardsMatch]); 


  useEffect(() => {
    let gameTimer;
    let startTime;
  
    if (gameStarted === true) {

  
      if (cardsMatch !== null && gameStarted) {
        if (cardsMatch === true) {
          console.log('Cards match!');
          
         
        } else if (cardsMatch === false) {
          console.log("Cards don't match");
        }
  
     
        setTimeout(() => {

      
          setCardsMatch(null);
         
  if(gameStarted){
    setRandomNumber(getRandomNumber(randomNumber));
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
  
  
  const [countdown, setCountdown] = useState(60);
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
            setCountDownInit(false)
            setCountDown(3)
            setPoints(100)
            // setTotalScore(100)
          
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

  // useEffect(() => {
  //   if (gameCompleted) {
  //     handleGameOver();
  //   }
  // }, [gameCompleted]); 

  // const handleGameOver = () => {
  //   // Assuming you have the username and score state in your component
  //   const data = {
  //     username: username,
  //     score: totalScore, // Assuming totalScore is the variable containing the final score
  //   };

  //   // Make a POST request to your backend endpoint
  //   axios.post("http://localhost:9000/", data)
  //     .then(response => {
  //       console.log("Username and score submitted successfully", response.data);
  //       // You can perform additional actions after successful submission
  //     })
  //     .catch(error => {
  //       console.error("Error submitting username and score", error);
  //       // Handle error scenarios if needed
  //     });
  // };

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
    setViewRules,
    countDownInit,
    setCountDownInit,
    countDown,
    username,
    setUsername,
    leaderboardSelected,
    setLeaderboardSelected
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