import React from "react";
import { useGameContext } from "../context";
import './effects'


const Effects = () => {

const {cardsMatch,points,countDown,countDownInit} = useGameContext()

return (
    <>
    {countDown !== 0 && countDownInit? (
        <p 
        style={{
            color:'white',
            fontSize:'3rem'
        }}>
            {countDown}
        </p>
    ): null}
    </>
)

}

export default Effects