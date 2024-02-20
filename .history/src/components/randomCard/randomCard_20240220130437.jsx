import React, { useEffect, useState } from "react";
import { useGameContext } from '../context';
import charizard from '../../media/charizard.gif'
import deoxys from '../../media/deoxys.gif'
import gengar from '../../media/gengar.gif'
import mewtwo from '../../media/mewtwo.gif'
import pikachu from '../../media/pikachu.gif'
import rayquaza from '../../media/rayquaza.gif'
import sudowudo from '../../media/sudowudo.gif'
import blazekin from '../../media/blazekin.gif'

const RandomCard = ({ id }) => {
  const { getRandomNumber, } = useGameContext();
  const [cardIndex, setCardIndex] = useState(getRandomNumber);
  const [isFading, setIsFading] = useState(false);
  const { randomCard,setRandomCard,randomNumber, setRandomNumber } = useGameContext();



  // useEffect(()=>{
  //   setRandomNumber(randomNumber)
  //   setRandomCard(randomCard)
  //   console.log('the new random card is',randomCard)
  // },[randomCard,randomNumber])

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

  // console.log('random card file',randomCard)




  return (
    <img
      className="game-card random"
      src={randomCard}
      alt={`Random Card ${id}`}
    
      id={id}
      style={{
        // opacity: isFading ? 0 : 1,
        transition: 'opacity 0.5s ease-in-out',
      }}
    />
  );
};

export default RandomCard;
