import React from "react";
import { useGameContext } from '../context';
import { useState, useEffect } from "react";
import abu6 from '../../media/aboubacar-6.jpg';
import abu5 from '../../media/aboubacar-5-fire.png';
import kakashi from '../../media/kakashi_susanoo.jpg';
import majin from '../../media/majin-vegeta.png';
import sasuke from '../../media/sasuke.jpg';
import vegeta from '../../media/vegeta-battle.png';
import obito from '../../media/war-obito.jpg';
import q3 from '../../media/q3-visuals-logo.png';

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

  const cards = [abu6, abu5, kakashi, majin, sasuke, vegeta, obito, q3];

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
