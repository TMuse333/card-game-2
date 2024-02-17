import React, { useState, useEffect } from "react";

import Card from "../card/card";
import RandomCard from "../randomCard/randomCard";
import './cardset.css';
import { useGameContext } from '../context';

const CardSet = () => {
    const [isHovered, setIsHovered] = useState(null);
    const [shuffledCards, setShuffledCards] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null);

    const { shuffleCards } = useGameContext();

    useEffect(() => {
        // Set up an interval to call shuffleCards every 10 seconds
        const intervalId = setInterval(() => {
            const shuffledIndexes = shuffleCards(); // Get shuffled indexes from the context
            setShuffledCards(shuffledIndexes);
            setSelectedCard(null);
        }, 11000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [shuffleCards]);

    const handleCardClick = (index) => {
        console.log('card clicked!');
        if (index === selectedCard) {
            setSelectedCard(null);
        } else {
            setSelectedCard(index);
        }
    };

    const handleShuffle = () => {
        const shuffledIndexes = shuffleCards();
        setShuffledCards(shuffledIndexes);
        setSelectedCard(null);
    };

    const handleMouseEnter = (index) => {
        setIsHovered(index);
        console.log('hover');
    };

    const handleMouseLeave = () => {
        setIsHovered(null);
    };

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

            <RandomCard
                id='abu6'
            />

            <div className="cardset-container">
                {cards.map((index) => (
                    <Card
                        key={index}
                        image={cards[index].img}
                        altImage={cards[index].alt}
                        isClicked={index === selectedCard}
                        id={cards[index].id}
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
