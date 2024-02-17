import React, { useState, useEffect } from "react";

import Card from "../card/card";
import './cardset.css';
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


import { useGameContext } from '../context';

const CardSet = () => {
    const [isHovered, setIsHovered] = useState(null);
    const [shuffledCards, setShuffledCards] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null)


    const handleCardClick = (index) => {
        console.log('card clicked!')
        if(selectedCard === null) {
            setSelectedCard(index)
        }
        else if(index === selectedCard){
            setSelectedCard(null)
        }
    }

    const { shuffleCards } = useGameContext();

    const handleMouseEnter = (index) => {
        setIsHovered(index);
        console.log('hover');
    }

    const handleMouseLeave = () => {
        setIsHovered(null);
    }

    const style = (index) => {
        const isSelected = isHovered === index;

        return {
            boxShadow: isSelected ? '0 0 10px gold' : null,
            transform: isSelected ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.3s ease-in'
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

    const handleShuffle = () => {
        shuffleCards(cards, setShuffledCards);
      };

      useEffect(() => {
        // Set up an interval to call shuffleCards every 10 seconds
        const intervalId = setInterval(() => {
          shuffleCards(cards, setShuffledCards);
        }, 11000);
    
        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
      }, [cards, shuffleCards]);





    const cardList = shuffledCards || cards;

    return (
        <div className="card-wrapper">
            <button
                style={{
                    position: 'fixed',
                    left: '20%',
                    top: '20%'
                }}
                onClick={handleShuffle}
            >
                Switch
            </button>

            <div className="cardset-container">
                {cardList.map((card, index) => (
                    <Card
                        key={index}
                        image={card.img}
                        altImage={card.alt}
                        isClicked={index === selectedCard}
                        id={card.id}
                        style={style(index)}
                        mouseEnter={() => handleMouseEnter(index)}
                        mouseLeave={handleMouseLeave}
                        handleClick={()=>handleCardClick(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default CardSet;
