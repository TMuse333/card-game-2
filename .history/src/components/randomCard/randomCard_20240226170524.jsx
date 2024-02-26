import React, { useEffect } from "react";
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
  const { getRandomNumber, setRandomNumber, setRandomCard, cardsMatch } = useGameContext();
  const cards = [mewtwo, deoxys, charizard, sudowudo, gengar, pikachu, rayquaza, blazekin];

  useEffect(() => {
    if (cardsMatch !== null) {

      setTimeout(()=>{
        const newRandomNumber = getRandomNumber();
        setRandomNumber(newRandomNumber);
        setRandomCard(cards[newRandomNumber]);
  
      })
    
    }
  }, [cardsMatch, setRandomNumber, setRandomCard, getRandomNumber]);

  return (
    <img
      className="game-card random"
      src={cards[cardsMatch !== null ? getRandomNumber() : 0]}
      alt={`Random Card ${id}`}
      id={id}
    />
  );
};

export default RandomCard;
