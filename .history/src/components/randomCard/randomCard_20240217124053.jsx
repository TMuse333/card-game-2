import React from "react";
import { useGameContext } from '../context';
import { useState, useEffect } from "react";
import charizard from '../../media/charizard.gif'
import deoxys from '../../media/deoxys.gif'
import gengar from '../../media/gengar.gif'
import mewtwo from '../../media/mewtwo.gif'
import pikachu from '../../media/pikachu.gif'
import rayquaza from '../../media/rayquaza.gif'
import sudowudo from '../../media/sudowudo.gif'
import blazekin from '../../media/blazekin.gif'

const RandomCard = ({ id }) => {
  const { getRandomNumber } = useGameContext();
  const [cardIndex, setCardIndex] = useState(getRandomNumber());

  useEffect(() => {
    // Change the cardIndex whenever getRandomNumber changes
    setCardIndex(getRandomNumber());
  
    // Set up an interval to update the cardIndex every 11500 milliseconds
    const intervalId = setInterval(() => {
      setCardIndex(getRandomNumber());
    }, 11000);
  
    // Clean up the interval when the component unmounts or when getRandomNumber changes
    return () => clearInterval(intervalId);
  }, [getRandomNumber]);

  const cards = [charizard, deoxys, gengar, mewtwo, pikachu, rayquaza, sudowudo, blazekin];

  return (
    <img
      className="card random"
      src={cards[cardIndex]}
      alt={`Random Card ${id}`}
      id={id}
    />
  );
};

export default RandomCard;
