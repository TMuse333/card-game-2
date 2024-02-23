// Leaderboard.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './leaderboard.css'
import { useGameContext } from '../context';


const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  const [isClicked, setIsClicked] = useState(false)

  const {setLea}


  useEffect(() => {
    // Fetch leaderboard data from the backend
    axios.get('http://localhost:9000/leaderboard')
      .then(response => {
        setLeaderboardData(response.data.data);
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
