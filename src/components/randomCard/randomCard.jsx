import React, { useEffect, useState } from "react";
import { useGameContext } from '../context';
import charizard from '../../media/charizard.gif';
import deoxys from '../../media/deoxys.gif';
import gengar from '../../media/gengar.gif';
import mewtwo from '../../media/mewtwo.gif';
import pikachu from '../../media/pikachu.gif';
import rayquaza from '../../media/rayquaza.gif';
import sudowudo from '../../media/sudowudo.gif';
import blazekin from '../../media/blazekin.gif';

const RandomCard = ({ id }) => {
  const { getRandomNumber, randomCard, setRandomCard, randomNumber, setRandomNumber, cardsMatch } = useGameContext();
  const [isFading, setIsFading] = useState(false);

  const cards = [
    mewtwo,
    deoxys,
    charizard,
    sudowudo,
    gengar,
    pikachu,
    rayquaza,
    blazekin,
  ];

  useEffect(() => {
    if (cardsMatch !== null) {
      console.log('Switching cards...');
      setTimeout(() => {
        const newRandomNumber = getRandomNumber();
        setRandomNumber(newRandomNumber);
        setRandomCard(cards[newRandomNumber]);
      }, 1000); 
    }
  }, [cardsMatch]); // Only run this effect when cardsMatch changes

  useEffect(() => {
    // Log for debugging purposes
    console.log('Random number:', randomNumber);
    console.log('Random card:', randomCard);
  }, [randomNumber, randomCard]); // Log whenever randomNumber or randomCard changes

  return (
    <img
      className="game-card random"
      src={randomCard}
      alt={`Random Card ${id}`}
      id={id}
      style={{
        transition: 'opacity 0.5s ease-in-out',
      }}
    />
  );
};

export default RandomCard;
