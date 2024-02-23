import React from "react";
import { useEffect,useState } from "react";
import { useContext } from "react";
import { GameProvider, useGameContext } from "../context";
import './scoreboard.css'
import axios from "axios";


const Scoreboard = ({style}) => {

const {totalScore,cardsMatch,points,setTotalScore,gameStarted,gameCompleted,username} = useGameContext()
const [correctAnswer, setCorrectAnswer] = useState(0)
const [incorrectAnswer, setIncorrectAnswer] = useState(0)

useEffect(() => {
    console.log("Username changed:", username);
    // You can perform additional actions when the username changes
  }, [username]);

useEffect(() => {
    if (gameCompleted === true) {
      // Make an Axios POST request to send the score to the MongoDB
      const data = {
        username: username, // Replace with your username or get it from your context
        score: totalScore,
      };

      axios.post("http://localhost/", data)
        .then(response => {
          console.log("Score submitted successfully", response.data);
          // You can perform additional actions after successful submission
        })
        .catch(error => {
          console.error("Error submitting score", error);
          // Handle error scenarios if needed
        });
    }
  }, [gameCompleted, totalScore]);

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
        <div className="scoreboard-container"
        style={style}>
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