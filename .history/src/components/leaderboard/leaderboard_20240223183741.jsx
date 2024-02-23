// Leaderboard.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './leaderboard.css'


const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  const [isClicked, setIsClicked] = useState(false)


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

  return (
    <div className='leaderboard-container'>
      <h2>Leaderboard</h2>

      <

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
