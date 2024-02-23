import React from "react";
import { useEffect,useState } from "react";
import { useContext } from "react";
import { GameProvider, useGameContext } from "../context";
import './scoreboard.css'
import axios from "axios";


const Scoreboard = () => {

const {totalScore,cardsMatch,points,setTotalScore,gameStarted,gameCompleted} = useGameContext()
const [correctAnswer, setCorrectAnswer] = useState(0)
const [incorrectAnswer, setIncorrectAnswer] = useState(0)

useEffect(()=>{
    if(gameCompleted){
        console.log('the final score is',totalScore)
    }
})

useEffect(()=>{

    if(gameStarted === false){

        setCorrectAnswer(0)
        setIncorrectAnswer(0)
    }

    if(cardsMatch && gameStarted === true){
        // setTotalScore((prevTotalScore) => (prevTotalScore + points));
        setTotalScore(totalScore + points)
        setCorrectAnswer(correctAnswer + 1)
   
    }

    else if (cardsMatch === false && gameStarted === true){
        setIncorrectAnswer(incorrectAnswer + 1)
    }


     
},[cardsMatch,gameStarted])
    return (
        <div className="scoreboard-container">
            <h2>Score: {totalScore}</h2>
            <div className="matches">
                <span style={{
                    color:'green'
                }}>
                    {correctAnswer}
                </span>
                <span
                style={{
                    color:'red'
                }}>
                    {incorrectAnswer}
                </span>
            </div>
        </div>
    )
}

export default Scoreboard