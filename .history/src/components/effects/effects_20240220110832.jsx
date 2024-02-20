import React from "react";
import { useGameContext } from "../context";
import './effects.css'


const Effects = () => {

const {cardsMatch,points,countDown,countDownInit} = useGameContext()

const resultText = cardsMatch === true ? `Correct! + ${points}` :
'Incorrect!'

const style = {
  color  cardsMatch === true : ''
}

return (
    <>
    {countDown !== 0 && countDownInit? (
        <p className="countdown-text"
      >
            {countDown}
        </p>
    ): null}
    {cardsMatch !== null ? (
        <p className="result-text">
            {resultText}
        </p>
    ): null}
    </>
)

}

export default Effects