import React from "react";
import { useGameContext } from "../context";

const Effects = () => {

const {cardsMatch,points,countDown} = useGameContext()

return (
    <>
    {countDown !== 0 (
        <p 
        style={{
            color:
        }}>
            {countDown}
        </p>
    )}
    </>
)

}

export default Effects