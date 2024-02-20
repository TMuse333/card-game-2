import React from "react";
import { useGameContext } from "../context";


const Effects = () => {

const {cardsMatch,points,countDown} = useGameContext()

return (
    <>
    {countDown !== 0 && c? (
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