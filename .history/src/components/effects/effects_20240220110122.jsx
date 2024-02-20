import React from "react";
import { useGameContext } from "../context";


const Effects = () => {

const {cardsMatch,points,countDown,countDownInit} = useGameContext()

return (
    <>
    {countDown !== 0 && countDownInit? (
        <p 
        style={{
            color:'white',
            fontSize:'1rem'
        }}>
            {countDown}
        </p>
    ): null}
    </>
)

}

export default Effects