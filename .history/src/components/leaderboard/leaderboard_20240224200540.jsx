// Leaderboard.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './leaderboard.css'
import { useGameContext } from '../context';


const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  const [isClicked, setIsClicked] = useState(false)

  const {setLeaderboardSelected,setUsername,setTotalScore} = useGameContext()


// Leaderboard.js (React frontend)

// ...

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.post('http://localhost:9000/fetchData');
      console.log(response.data);
      // Handle the data in your React state or component logic
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  fetchData();
}, []);

// ...


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