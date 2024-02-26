import React, { useEffect, useState, useRef } from "react";
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
  const { getRandomNumber } = useGameContext();
  const [randomNumber, setRandomNumber] = useState(getRandomNumber());
  const [isFading, setIsFading] = useState(false);
  const { setRandomCard, cardsMatch } = useGameContext();
  const randomNumberRef = useRef();

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
    if (cardsMatch !== null && randomNumber !== randomNumberRef.current) {
      setTimeout(() => {
        const newRandomNumber = getRandomNumber();
        setRandomNumber(newRandomNumber);
        setRandomCard(cards[newRandomNumber]);
        console.log('current random number', newRandomNumber);
      }, 1000);
    }
  }, [cardsMatch, setRandomCard, getRandomNumber, randomNumber]);

  useEffect(() => {
    randomNumberRef.current = randomNumber;
  }, [randomNumber]);

  return (
    <img
      className="game-card random"
      src={cards[randomNumber]}
      alt={`Random Card ${id}`}
      id={id}
      style={{
        transition: 'opacity 0.5s ease-in-out',
      }}
    />
  );
};

export default RandomCard;
