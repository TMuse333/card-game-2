import CardSet from "./cardset/cardset"
import react from 'react'
import Card from "./card/card"
import q3 from '../media/q3-visuals-logo.png'
import abu5 from '../media/aboubacar-6.jpg'
import RandomCard from "./randomCard/randomCard"
import Clock from "./clock/clock"
import { useGameContext } from "./context"
import { useState } from "react"

const Index = () => {
    const { startNewGame } = useGameContext();
  
 const [startGame1, setStartGame1 ] = useState(false)
  
    return (
      <div className="homepage">
<Clock/>
        <CardSet />
      </div>
    );
  };
  exp
  export default Index;