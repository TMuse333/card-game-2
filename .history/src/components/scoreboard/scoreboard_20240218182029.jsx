import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { GameProvider, useGameContext } from "../context";
import './scoreboard.css'


const Scoreboard = () => {

const {totalScore,cardsMatch,points,setTotalScore} = useGameContext()

useEffect(()=>{
    if(cardsMatch){
        setTotalScore((prevTotalScore) => prevTotalScore + points);
    }
     
},[cardsMatch,setTotalScore])
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