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
  const { getRandomNumber } = useGameContext();
  const [cardIndex, setCardIndex] = useState(getRandomNumber());

  useEffect(() => {
    // Change the cardIndex whenever getRandomNumber changes
    setCardIndex(getRandomNumber());
  }, [getRandomNumber]);

  const cards = [
    mewtwo,
    deoxys, charizard,
    sudowudo,
    gengar,
    pikachu,
    rayquaza,
    blazekin,
  ];

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
