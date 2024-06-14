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
    if (gameCompleted) {
      // Step 1: Make an Axios GET request to fetch the user's data
      axios.get(`https://quantum-card-game-bd4eaa931b03.herokuapp.com/userData/retrieve`)
        .then(response => {
          const userData = response.data.data;

          console.log('the user data',userData)

          const currentUser = userData.find(user => user.username === username);

          if (currentUser) {
            console.log('Current user data:', currentUser);
            console.log('Current users highest score so far',currentUser.score)
          } else {
            console.log(`User with username ${username} not found.`);
          }

          // Assuming userData contains the user's information including score
          const currentUserScore = userData.score;

          

          // Step 2: Check if the game score is higher than the current user score
          if (totalScore > currentUser.score) {
            // Step 3: Update the user's score with the new score
            const data = {
              username: username,
              newScore: totalScore,
            };

            // Step 4: Make an Axios POST request to update the leaderboard with the new score
            axios.post("https://quantum-card-game-bd4eaa931b03.herokuapp.com/userData/updateScore", data)
              .then(response => {
                console.log("Score updated successfully", response.data);
                // You can perform additional actions after successful update
              })
              .catch(error => {
                console.error("Error updating score", error);
                // Handle error scenarios if needed
              });
          } else {
            console.log("Game score is not higher than the current score, no update needed.");
          }
        })
        .catch(error => {
          console.error("Error fetching user data", error);
          // Handle error scenarios if needed
        });
    }
  }, [gameCompleted, totalScore, username]);

  useEffect(() => {
    if (gameCompleted) {
      // Step 1: Make an Axios GET request to fetch the leaderboard
      axios.get(`http://localhost:9000/leaderboard`)
        .then(response => {
          // Step 2: Find the user's current score
          const leaderboardData = response.data; 


          console.log('leaderboard data',leaderboardData)
          
          // Assuming leaderboardData is an array of objects
  
          // Find the user's entry in the leaderboard
          const currentUser = leaderboardData.data.find(entry => entry.username === username);
  
          if (!currentUser) {
            console.log(`User ${username} not found in leaderboard.`);
            return;
          }
  
          const currentUserScore = currentUser.score;
  
          // Step 3: Check if the game score is higher than the current user score
          if (totalScore > currentUserScore) {
            // Step 4: Update the user's score with the new score
            const data = {
              username: username,
              score: totalScore,
            };
  
            // Step 5: Make an Axios POST request to update the leaderboard with the new score
            axios.post("http://localhost:9000/leaderboard", data)
              .then(response => {
                console.log("Score submitted successfully", response.data);
                // You can perform additional actions after successful submission
              })
              .catch(error => {
                console.error("Error submitting score", error);
                // Handle error scenarios if needed
              });
          } else {
            console.log("Game score is not higher than the current score, no update needed.");
          }
        })
        .catch(error => {
          console.error("Error fetching leaderboard data", error);
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