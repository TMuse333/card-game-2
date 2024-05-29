// Leaderboard.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './leaderboard.css'
import { useGameContext } from '../context';


const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  const [isClicked, setIsClicked] = useState(false)

  const {setLeaderboardSelected} = useGameContext()


  useEffect(() => {
    // Fetch leaderboard data from the backend
    axios.get('https://quantum-card-game-bd4eaa931b03.herokuapp.com/leaderboard')
      .then(response => {
        console.log('leaderboard data retrieved successfully!')
        setLeaderboardData(response.data.data);
        setUsername(null);
        setTotalScore(0);
      })
      .catch(error => {
        // setLeaderboardSelected(false)
        // window.alert("Download the game at https://github.com/TMuse333/card-game-2 to view the leader board!")
        console.error('Error fetching leaderboard data', error);
      });
  }, []);

  const closeLeaderboard = () => {
    setLeaderboardSelected(false)
    console.log('leaderboard closed')
  }

  return (
    <div className='leaderboard-container'>
      <h2>Leaderboard</h2>

      <button
      onClick={closeLeaderboard}>Close</button>

        <div className='user-score'>
            <span>User</span>
            <span>Score</span>
        </div>

        {leaderboardData.map(entry => (

         <div className='user-score'
          key={entry._id}>
            <span>
                {entry.username}

            </span>
            <span>
                {entry.score}
            </span>
            </div>
        ))}
   
    </div>
  );
};

export default Leaderboard;