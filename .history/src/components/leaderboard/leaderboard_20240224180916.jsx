// Leaderboard.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './leaderboard.css'
import { useGameContext } from '../context';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const { setLeaderboardSelected } = useGameContext();

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint for your leaderboard data
        const response = await axios.get('/leaderboard');
        setLeaderboardData(response.data.data);
      } catch (error) {
        console.error('Error fetching leaderboard data', error);
      }
    };

    fetchLeaderboardData();
  }, []);

  const closeLeaderboard = () => {
    setLeaderboardSelected(false);
    console.log('leaderboard closed');
  };

  return (
    <div className='leaderboard-container'>
      <h2>Leaderboard</h2>

      <button onClick={closeLeaderboard}>Close</button>

      <div className='user-score'>
        <span>User</span>
        <span>Score</span>
      </div>

      {leaderboardData.map(entry => (
        <div className='user-score' key={entry._id}>
          <span>{entry.username}</span>
          <span>{entry.score}</span>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
