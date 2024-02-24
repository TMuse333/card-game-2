// Leaderboard.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './leaderboard.css'
import { useGameContext } from '../context';


const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  const [isClicked, setIsClicked] = useState(false)

  const {setLeaderboardSelected,setUsername,setTotalScore} = useGameContext()


  useEffect(() => {
    // Fetch leaderboard data from the backend
    axios.get('mongodb+srv://cluster0.uacmcvd.mongodb.net/leaderboard')
      .then(response => {
        setLeaderboardData(response.data.data);
        setUsername(null);
        setTotalScore(0);
      })
      .catch(error => {
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