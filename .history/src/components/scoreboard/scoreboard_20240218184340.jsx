import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { GameProvider, useGameContext } from "../context";
import './scoreboard.css'


const Scoreboard = () => {

const {totalScore,cardsMatch,points,setTotalScore,gameStarted} = useGameContext()

useEffect(()=>{
    if(cardsMatch && gameStarted === true){
        // setTotalScore((prevTotalScore) => (prevTotalScore + points));
        setTotalScore(totalScore + points)
   
    }
     
},[cardsMatch,gameStarted,totalScore])
    return (
        <div className="scoreboard-container">
            <h2>Score: {totalScore}</h2>
            <div className="matches">
                <span>
                    0
                </span>
                <span>
                    0
                </span>
            </div>
        </div>
    )
}

export default Scoreboard