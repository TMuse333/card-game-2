import React from "react";
import { useGameContext } from "../context";
import './effects.css'


const Effects = () => {

const {cardsMatch,points,countDown,countDownInit,gameStarted} = useGameContext()

const resultText = cardsMatch === true ? `Correct! + ${points}` :
'Incorrect!'

const style = {
    backgroundColor: cardsMatch === true ? 'red' : 'linear-gradient(90deg, #FF5733, #FF5733)'
  }
  

return (
    <>
    {countDown !== 0 && countDownInit? (
        <p className="countdown-text"
      >
            {countDown}
        </p>
    ): null}
    {cardsMatch !== null && gameStarted? (
        <p className="result-text"
        style={style}>
            {resultText}
        </p>
    ): null}
    </>
)

}

export default Effects