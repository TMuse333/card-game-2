// Leaderboard.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './leaderboard.css';
import { useGameContext } from '../context';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const { setLeaderboardSelected } = useGameContext();

  useEffect(() => {
    // Fetch user data from the backend
    axios.get('http://localhost:9000/userData/retrieve')
      .then(response => {
        console.log('User data retrieved successfully!');

        const userData = response.data.data;
        console.log('Retrieved user data:', userData);

        // Extract username and score attributes from each userData object
        const leaderboard = userData.map(user => ({
          _id: user._id, // Assuming user._id exists, if not adjust accordingly
          username: user.username,
          score: user.score
        }));

        // Set the leaderboard data
        setLeaderboardData(leaderboard);
      })
      .catch(error => {
        console.error('Error fetching user data', error);
      });
  }, []);

  const closeLeaderboard = () => {
    setLeaderboardSelected(false);
    console.log('Leaderboard closed');
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
