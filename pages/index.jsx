import React from 'react';
import CardSet from "../src/components/cardset/cardset";

import { useGameContext } from "../src/components/context";
import { useState } from "react";

import CardDisplay from "../src/components/cardDisplay/cardDisplay";
import Rules from "../src/components/rules/rules";
import Effects from '../src/components/effects/effects';
import UsernameForm from '../src/components/usernameForm/usernameForm';
import Leaderboard from '../src/components/leaderboard/leaderboard';
import Navbar from '../src/components/navbar/navbar';
import NoScoreWarning from '../src/components/noScoreWarning/noScoreWarning';
import LoginBox from '../src/components/loginBox/loginBox';

const Index = () => {
    const { viewCardsClicked, viewRules, gameStarted,leaderboardSelected, setLeaderboardSelected,gameCompleted,
      playWithoutScore, userLoginClicked } = useGameContext();
    const [startGame1, setStartGame1] = useState(false);

    const toggleLeaderboard = () => {
        console.log('show leader board')
        setLeaderboardSelected(true)
    }

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
