import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './leaderboard.css';
import { useGameContext } from '../context';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const { setLeaderboardSelected, setUsername, leaderboardSelected } = useGameContext();

  useEffect(() => {
    // Fetch leaderboard data from the backend
    axios.get('http://localhost:9000/leaderboard')
      .then(response => {
        setLeaderboardData(response.data.data);
        setUsername(null);
      })
      .catch(error => {
        console.error('Error fetching leaderboard data', error);
      });
  }, []);

  const closeLeaderboard = () => {
    setLeaderboardSelected(false);
    console.log('leaderboard closed');
  };

  const style = {
    opacity: !leaderboardSelected ? 0 : 1,
    zIndex: !leaderboardSelected ? -5 : 1,
  };

  const getRankColor = (rank) => {
    switch (rank) {
      case 1:
        return 'gold';
      case 2:
        return 'silver';
      case 3:
        return 'bronze';
      default:
        return 'white'; // or any regular color you want for other ranks
    }
  };

  return (
    <div className='leaderboard-container' style={style}>
      <h2>Leaderboard</h2>

      <div className='user-score'>
        <span className='title'>User</span>
        <span className='title'>Score</span>
      </div>

      <div className='leader-list'>
        {leaderboardData.map((entry, index) => (
          <div className='user-score' key={entry._id} style={{ color: getRankColor(index + 1) }}>
            <span>{entry.username}</span>
            <span>{entry.score}</span>
          </div>
        ))}
      </div>

      <button className='leader-button' onClick={closeLeaderboard}>
        Close
      </button>
    </div>
  );
};

export default Leaderboard;
