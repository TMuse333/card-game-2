import React from 'react';
import CardSet from "../src/components/cardset/cardset";

import { useGameContext } from "../src/components/context";
import { useState, useEffect } from "react";

import CardDisplay from "../src/components/cardDisplay/cardDisplay";
import Rules from "../src/components/rules/rules";
import Effects from '../src/components/effects/effects';
import UsernameForm from '../src/components/usernameForm/usernameForm';
import Leaderboard from '../src/components/leaderboard/leaderboard';
import Navbar from '../src/components/navbar/navbar';
import NoScoreWarning from '../src/components/noScoreWarning/noScoreWarning';
import LoginBox from '../src/components/loginBox/loginBox';

import axios from 'axios'

const Index = () => {
    const { viewCardsClicked, viewRules, gameStarted,leaderboardSelected, setLeaderboardSelected,gameCompleted,
      playWithoutScore, userLoginClicked } = useGameContext();


    const toggleLeaderboard = () => {
        console.log('show leader board')
        setLeaderboardSelected(true)
    }

    const [dbStatus, setDbStatus] = useState(null);


    useEffect(() => {
      // Check the server status on component mount
      axios.get('https://quantum-card-game-bd4eaa931b03.herokuapp.com/status')
        .then(response => {
          setDbStatus(response.data.dbConnected);
          console.log('Database connected:', response.data.dbConnected);
        })
        .catch(error => {
          console.error('Error fetching status:', error);
          setDbStatus(false);
        });
    }, []);

    return (
        <>
      
      <div className='homepage'
      style={{
        filter:playWithoutScore || userLoginClicked ? 'blur(4px)' : 'none'
      }}>



      {viewCardsClicked ? (
        <CardDisplay/>
      ) : (
<>
        {!gameStarted && (
     <Navbar/>
        )}
    

        {leaderboardSelected && (
            <Leaderboard/>
        )}

        {viewRules && (
            <Rules/>
        )}
        <Effects/>

        <p style={{
 
}}>Database connection status: {dbStatus ? 'Connected' : 'Not connected'}</p>
      
        <CardSet/>

       
        </>
      )}

       
        </div>
       {playWithoutScore === true && (
         <NoScoreWarning/>
       )}

        {userLoginClicked && (
          <LoginBox/>
        )}
       
        </>

     
    );
};

export default Index;
