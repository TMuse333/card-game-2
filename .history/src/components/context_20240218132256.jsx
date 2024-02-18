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



  useEffect(()=> {


    if(gameStarted){

      if(cardsMatch !== null){

      
      if(cardsMatch === true){
        console.log('cards match!')
       

      }
      else if (cardsMatch === false){
        console.log('cards dont match')
      }

      setTimeout(())
        setCardsMatch(null);
        setShuffledIndexes(shuffleCards());
        setRandomNumber(getRandomNumber());
        setRandomCard(cards[randomNumber]);
    }
 
    }
  },[gameStarted,cardsMatch,randomCard])

  console.log('random card',randomCard)


  // useEffect(()=>{
  //   setRandomNumber(randomNumber)
  //   setRandomCard(cards[randomNumber])

  // },[randomCard,randomNumber])

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
