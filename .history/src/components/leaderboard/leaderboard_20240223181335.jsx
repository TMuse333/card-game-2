// Leaderboard.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './leaderboard.css'

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

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
      <ul >
        {leaderboardData.map(entry => (
          <li key={entry._id}
          >
            {entry.username} - {entry.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
