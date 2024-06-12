import React from "react";
import { useEffect } from "react";
import { useGameContext } from "../context";
import './effects.css'


const Effects = () => {

const {cardsMatch,points,countDown,countDownInit,gameStarted,
setCardsMatch} = useGameContext()


useEffect(() => {
    setCardsMatch(null)
},[gameStarted])

const resultText = cardsMatch === true ? `Correct!` :
'Incorrect!'

const style = {
    backgroundColor: cardsMatch === true ? 'green' : 'red'
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
            {resultText}<br/>
            {cardsMatch === true ? `+ ${points}` : null}
        </p>
    ): null}
    </>
)

}

export default Effects