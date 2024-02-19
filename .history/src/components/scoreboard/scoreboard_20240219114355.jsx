import React from "react";
import { useEffect,useState } from "react";
import { useContext } from "react";
import { GameProvider, useGameContext } from "../context";
import './scoreboard.css'


const Scoreboard = () => {

const {totalScore,cardsMatch,points,setTotalScore,gameStarted} = useGameContext()
const [correctAnswer, setCorrectAnswer] = useState(0)
const [incorrectAnswer, setIncorrectAnswer] = useState(0)

useEffect(()=>{
    if(cardsMatch && gameStarted === true){
        // setTotalScore((prevTotalScore) => (prevTotalScore + points));
        setTotalScore(totalScore + points)
        setCorrectAnswer(correctAnswer + 1)
   
    }

    else if (cardsMatch === false && gameStarted === true){
        setIncorrectAnswer(incorrectAnswer + 1)
    }

c
     
},[cardsMatch,gameStarted])
    return (
        <div className="scoreboard-container">
            <h2>Score: {totalScore}</h2>
            <div className="matches">
                <span>
                    {correctAnswer}
                </span>
                <span>
                    {incorrectAnswer}
                </span>
            </div>
        </div>
    )
}

export default Scoreboard