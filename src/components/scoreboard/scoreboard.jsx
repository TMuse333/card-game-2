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
  if (gameCompleted && playWithoutScore === false) {
    // Retrieve the token from localStorage
    const token = localStorage.getItem('token');

    if (!token) {
      console.error("No token found. User is not authenticated.");
      return;
    }

    console.log("Token found:", token);

    // Configure Axios headers with the token
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    // Step 1: Make an Axios GET request to fetch the user's data
    axios.get('https://quantum-card-game-bd4eaa931b03.herokuapp.com/userData/retrieve', config)
      .then(response => {
        const userData = response.data.data;

        console.log('The user data:', userData);

        const currentUser = userData.find(user => user.username === username);

        if (currentUser) {
          console.log('Current user data:', currentUser);
          console.log('Current user\'s highest score so far:', currentUser.score);
        } else {
          console.log(`User with username ${username} not found.`);
        }

        // Step 2: Check if the game score is higher than the current user score
        if (totalScore > currentUser.score) {
          // Step 3: Update the user's score with the new score
          const data = {
            username: username,
            newScore: totalScore,
          };

          // Step 4: Make an Axios POST request to update the leaderboard with the new score
          axios.post('https://quantum-card-game-bd4eaa931b03.herokuapp.com/userData/updateScore', data, config)
            .then(response => {
              console.log('Score updated successfully', response.data);
              // You can perform additional actions after successful update
            })
            .catch(error => {
              console.error('Error updating score', error);
              // Handle error scenarios if needed
            });
        } else {
          console.log('Game score is not higher than the current score, no update needed.');
        }
      })
      .catch(error => {
        console.error('Error fetching user data', error);
        // Handle error scenarios if needed
      });
  }
}, [gameCompleted, totalScore, username]);



  
  
  

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