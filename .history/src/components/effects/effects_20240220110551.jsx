import React from "react";
import { useGameContext } from "../context";
import './effects.css'


const Effects = () => {

const {cardsMatch,points,countDown,countDownInit} = useGameContext()

return (
    <>
    {countDown !== 0 && countDownInit? (
        <p className="countdown-text"
      >
            {countDown}
        </p>
    ): null}
    
    </>
)

}

export default Effects