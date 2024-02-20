import React from "react";
import { useGameContext } from "../context";
import './effects.css'


const Effects = () => {

const {cardsMatch,points,countDown,countDownInit} = useGameContext()

const resultText = cardsMatch === true ? 'Correct '

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

        </p>
    ): null}
    </>
)

}

export default Effects