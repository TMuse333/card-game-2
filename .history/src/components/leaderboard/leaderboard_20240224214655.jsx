// Leaderboard.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './leaderboard.css'
import { useGameContext } from '../context';


const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  const [isClicked, setIsClicked] = useState(false)

  const {setLeaderboardSelected,setUsername,leaderboardSelected} = useGameContext()


  useEffect(() => {
    // Fetch leaderboard data from the backend
    axios.get('http://localhost:9000/leaderboard')
      .then(response => {
        setLeaderboardData(response.data.data);
        setUsername(null);
        // setTotalScore(0);
      })
      .catch(error => {
        console.error('Error fetching leaderboard data', error);
      });
  }, []);

  const closeLeaderboard = () => {
    setLeaderboardSelected(false)
    console.log('leaderboard closed')
  }

  const style= {
    opacity: !leaderboardSelected ? 0 : 1,
    zIndex: !leaderboardSelected-5 : 1,
    // transform:!leaderboardSelected ? 'scale(0)' : 'scale(1)'
  }

  return (
    <div className='leaderboard-container'
    style={style}>
      <h2>Leaderboard</h2>

     

        <div className='user-score'>
            <span className='title'>User</span>
            <span className='title'>Score</span>
        </div>

        {leaderboardData.map(entry => (

         <div className='user-score'
          key={entry._id}>
            <span >
                {entry.username}

            </span>
            <span >
                {entry.score}
            </span>
            </div>
        ))}
    <button className='leader-button'
      onClick={closeLeaderboard}>Close</button>
    </div>
  );
};

export default Leaderboard;