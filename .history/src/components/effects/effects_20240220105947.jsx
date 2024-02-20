import React from "react";
import { useGameContext } from "../context";

const Effects = () => {

const {cardsMatch,points,countDown} = useGameContext()

return (
    <>
    {countDown !== 0 (
        <p 
        style={{
            color'white'
        }}>
            {countDown}
        </p>
    )}
    </>
)

}

export default Effects