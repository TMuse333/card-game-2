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

const CardSet = () => {
    const [isHovered, setIsHovered] = useState(null);
   
    const [selectedCard, setSelectedCard] = useState(null);
    const [isShuffling, setIsShuffling] = useState(false);
    const [hasShuffled, setHasShuffled] = useState(false);

   





    const { shuffleCards, gameStarted } = useGameContext();


    const [shuffledCards, setShuffledCards] = useState(shuffleCards);


console.log('game started rage',gameStarted)

    
      useEffect(() => {

   
         
          setTimeout(() => {
            setShuffledCards(shuffleCards());
         
          }, 800);
        
      }, [gameStarted, shuffleCards]);
    
      const handleStartClick = () => {
        startNewGame();
      };

    const handleMouseEnter = (index) => {
        setIsHovered(index);

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

    const shuffledCardItems = shuffledCards.map(index => cards[index]);

    return (
        <div className="card-wrapper">
      
<button onClick={handleStartClick}
style={{
    position:'fixed',
    top:'0',
    right:'0'
}}>
    start game
</button>
            <RandomCard
                id='abu6'
            />

            <div className="cardset-container">
                {shuffledCardItems.map((card, index) => (
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
    );
}

export default CardSet;
