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

const CardSet = () => {
    const [isHovered, setIsHovered] = useState(null);
   
    const [selectedCard, setSelectedCard] = useState(null);
    const [isShuffling, setIsShuffling] = useState(false);
    const [hasShuffled, setHasShuffled] = useState(false);

   





    const {  gameStarted,setGameStarted,cardsMatch,setCardsMatch,shuffledIndexes,setShuffledIndexes,shuffleCards } = useGameContext();

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



    
      const handleStartClick = () => {
        setGameStarted(true)
        
      };

    const handleMouseEnter = (index) => {
        setIsHovered(index);

    };



    const handleCardClick = (index) => {
        const clickedCard = shuffledCards[index];
        
       
        
            if (index === selectedCard) {
                setSelectedCard(null);

              } else {
                setSelectedCard(index);
              }

              if (clickedCard.alt === randomCard) {
                console.log('Clicked card matches random card!');
                setCardsMatch(true)
            
                
                // Do something when the clicked card matches the random card
              }  if(clickedCard.alt !== randomCard){
              //   console.log('Clicked card does not match random card!');
                setCardsMatch(false)
           
            
                // Do something when the clicked card does not match the random card
              }

              setTimeout(()=>{
                if(gameStarted){

  
                setSelectedCard(null)
                setShuffledIndexes(shuffleCards())
                }
              },3000)
        
     
    
   
      };

    const handleMouseLeave = () => {
        setIsHovered(null);
    };

// CardSet.js
const style = (index) => {
    const isSelected = isHovered === index;
    const isClicked = index === selectedCard;
    const isFlipping = isClicked && !isShuffling; // Only flip during a click and not during shuffling
  
    return {
      opacity: isShuffling ? 0 : 1,
      boxShadow: isSelected ? '0 0 10px gold' : null,
    //   transform: isFlipping ? 'scale(1.1) rotateY(180deg)' :isClicked ? ' rotateY(-180deg)' : 'scale(1)',
      transition: isFlipping ? 'transform 0.3s ease-in-out' : 'opacity 0.5s ease-in-out',
    };
  };
  
  
  

 

    // useEffect(()=>{
    //     setShuffledIndexes(shuffledIndexes)
    // },[shuffledIndexes])
 

   

    return (
        <div className="card-wrapper">
      



          
                <div className="cards">




         <div className="upper-cards">

{gameStarted ? (

<>
            <Scoreboard/>


            <RandomCard
  id='abu6'
/>
<Clock/>
</>
):(
    
<button onClick={handleStartClick}
style={{
    transform:'translateY(-2rem)'
    // position:'fixed',
    // top:'0',
    // right:'0'
}}>
    start game
</button>
)}

</div>
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
            </div>
        </div>
    );
}

export default CardSet;
