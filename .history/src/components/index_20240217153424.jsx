import CardSet from "./cardset/cardset"
import react from 'react'
import Card from "./card/card"
import q3 from '../media/q3-visuals-logo.png'
import abu5 from '../media/aboubacar-6.jpg'
import RandomCard from "./randomCard/randomCard"
import Clock from "./clock/clock"
import { useGameContext } from "./context"

const Index = () => {
    const { startNewGame } = useGameContext();
  
    const handleStartGame = () => {
      startNewGame();
      
    };
  
    return (
      <div className="homepage">
        <button className="start-button" onClick={handleStartGame}>
          Start Game
        </button>
        <CardSet />
      </div>
    );
  };
  
  export default Index;