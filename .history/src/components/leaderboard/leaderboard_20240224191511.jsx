// Leaderboard.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './leaderboard.css'
import { useGameContext } from '../context';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const { setLeaderboardSelected } = useGameContext();

  const apiUrl = 'https://cloud.mongodb.com/v2/65d7918c6f772c6e0289c314#/metrics/replicaSet/65d7921a22b7166f0ec3bf17/explorer/test/leaderboards/find';

    const fetchLeaderboardData = async () => {
      try {
        // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint for your leaderboard data
        const response = await axios.get();
        setLeaderboardData(response.data.data);
      } catch (error) {
        console.error('Error fetching leaderboard data', error);
      }
    };

    useEffect(() => {
      fetchLeaderboardData(); // Fetch data when the component is mounted
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
