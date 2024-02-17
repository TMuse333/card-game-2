import React, { useEffect } from "react";
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
