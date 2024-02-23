import React, { useState, useEffect } from "react";

import Card from "../card/card";
import RandomCard from "../randomCard/randomCard";
import './cardset.css';
import { useGameContext } from '../context';

import abu6 from '../../media/aboubacar-6.jpg';
import abu5 from '../../media/aboubacar-5-fire.png';
import kakashi from '../../media/kakashi_susanoo.jpg';
import majin from '../../media/majin-vegeta.png';
import sasuke from '../../media/sasuke.jpg';
import vegeta from '../../media/vegeta-battle.png';
import obito from '../../media/war-obito.jpg';
import q3 from '../../media/q3-visuals-logo.png';

import charizard from '../../media/charizard.gif'
import deoxys from '../../media/deoxys.gif'
import gengar from '../../media/gengar.gif'
import mewtwo from '../../media/mewtwo.gif'
import pikachu from '../../media/pikachu.gif'
import rayquaza from '../../media/rayquaza.gif'
import sudowudo from '../../media/sudowudo.gif'
import blazekin from '../../media/blazekin.gif'
import { useContext } from "react";
import Scoreboard from "../scoreboard/scoreboard";
import Clock from "../clock/clock";
import ResultScreen from "../resultScreen/resultScreen";
import UsernameForm from "../usernameForm/usernameForm";

const CardSet = () => {
    const [isHovered, setIsHovered] = useState(null);
   
    const [selectedCard, setSelectedCard] = useState(null);
    const [isShuffling, setIsShuffling] = useState(false);
    const [hasShuffled, setHasShuffled] = useState(false);

   





    const {
          gameStarted,
          setGameStarted,
          cardsMatch,setCardsMatch,
          shuffledIndexes,
          setShuffledIndexes,
          shuffleCards,gameCompleted,
          setTotalScore,
          setGameCompleted,
        setViewCardsClicked,
    setViewRules,viewRules,
setCountDownInit,countDownInit,
username } = useGameContext();

    useEffect(()=>{
        console.log('indexes',shuffledIndexes)
    },[shuffledIndexes])


    
  


    const cards = [
        { img: q3, alt: mewtwo, id: 'q3' },
        { img: abu6, alt: deoxys, id: 'abu6' },
        { img: majin, alt: charizard, id: 'majin' },
        { img: kakashi, alt: sudowudo, id: 'kakashi' },
        { img: sasuke, alt: gengar, id: 'sasuke' },
        { img: vegeta, alt: pikachu, id: 'vegeta' },
        { img: obito, alt: rayquaza, id: 'obito' },
        { img: abu5, alt: blazekin, id: 'abu5' },
    ];

    const shuffledCards = shuffledIndexes.map(index => cards[index]);   


 



    const { randomCard } = useGameContext();



    const handleViewRules = () => {
        setViewRules(true)
    }
    
      const handleStartClick = () => {
        if(username != null){

        }
    
        
      };

    const handleMouseEnter = (index) => {
        setIsHovered(index);

    };

    const handleHomeClick = () => {
        setGameCompleted(false)
    }


    useEffect(()=>{
        
        if(gameCompleted === true){
            console.log('the game is completed')
        }
    },[gameCompleted])

    const handleCardClick = (index) => {
        const clickedCard = shuffledCards[index];
        

        if(cardsMatch !== null && gameStarted && countDownInit ){
            return
        }

     
        
            if (index === selectedCard) {
                setSelectedCard(null);

              } else if(countDownInit === false)
                setSelectedCard(index);
              

              if (clickedCard.alt === randomCard && cardsMatch === null && countDownInit === false) {
                console.log('Clicked card matches random card!');
                setCardsMatch(true)
            
                
                // Do something when the clicked card matches the random card
              }  if(clickedCard.alt !== randomCard  && cardsMatch === null && countDownInit === false){
              //   console.log('Clicked card does not match random card!');
                setCardsMatch(false)
           
            
                // Do something when the clicked card does not match the random card
              }

              setTimeout(()=>{
                if(gameStarted){

  
                setSelectedCard(null)
                setShuffledIndexes(shuffleCards())
                }
              },1000)
        
            
    
   
      };

    const handleMouseLeave = () => {
        setIsHovered(null);
    };

// CardSet.js
const style = (index) => {
    const isSelected = isHovered === index;
    const isClicked = index === selectedCard;
    const isFlipping = isClicked && !isShuffling;
    const correctCard =  isSelected && cardsMatch === true
    const incorrectCard = isSelected && cardsMatch === false
  
    return {
      opacity: isShuffling ? 0 : 1,
      boxShadow: correctCard  && isSelected? '0 0 20px green' : incorrectCard && isSelected ? ' 0 0 12px red' : isSelected ? '0 0 10px gold' : null,
    //   transform: isFlipping ? 'scale(1.1) rotateY(180deg)' :isClicked ? ' rotateY(-180deg)' : 'scale(1)',
      transition: isFlipping ? 'transform 0.3s ease-in-out' : 'opacity 0.5s ease-in-out',
      border: correctCard ? '2px solid green' : incorrectCard ? '2px solid red': null
    };
  };
  
  
  

 

    // useEffect(()=>{
    //     setShuffledIndexes(shuffledIndexes)
    // },[shuffledIndexes])
 
const viewCards = () => {
    setViewCardsClicked(true)
}

const scoreboardStyle = {
    // opacity:gameCompleted ? '1' : '0',
   
    display: !gameCompleted && gameStarted? 'block' : 'none'
}


   

    return (
        <div className="card-wrapper"
        style={{
           filter: viewRules ? 'blur(5px)' : null ,
           transition: 'filter 0.3s ease-in'
        }}>
      



          
                <div className="cards">




         <div className="upper-cards">
         <Scoreboard
            style={scoreboardStyle}/>

{gameStarted ? (

<>
<div className="game-info">


           


            <RandomCard
  id='abu6'
/>

<Clock/>
</div>
</>
):(
    <>
    {!gameCompleted ? (
    <button className="game-button"
    onClick={handleViewRules}
    > How to play</button>
    ) : (
        <button className="game-button"
       onClick={handleHomeClick} > Home screen</button> 
    )}

<button className="game-button"
 onClick={handleStartClick}
>
    start game
</button>
<button className="game-button"
    onClick={viewCards}> view cards</button>
</>
)}

</div>

{gameCompleted? (
   <ResultScreen/>
) : (
    <div className="cardset-container">
    {shuffledCards.map((card, index) => (
        <Card
            key={index}
            image={card.img}
            altImage={card.alt}
            isClicked={index === selectedCard}
            id={card.id}
            style={style(index)}
            mouseEnter={() => handleMouseEnter(index)}
            mouseLeave={handleMouseLeave}
            handleClick={() => handleCardClick(index)}
        />
    ))}
</div>
)}

            </div>

{/* {!gameStarted && (
    <UsernameForm/>
)} */}

        </div>
    );
}

export default CardSet;
