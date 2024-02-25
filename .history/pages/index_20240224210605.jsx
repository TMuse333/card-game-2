import React from 'react';
import CardSet from "../src/components/cardset/cardset";

import { useGameContext } from "../src/components/context";
import { useState } from "react";

import CardDisplay from "../src/components/cardDisplay/cardDisplay";
import Rules from "../src/components/rules/rules";
import Effects from '../src/components/effects/effects';
import UsernameForm from '../src/components/usernameForm/usernameForm';
import Leaderboard from '../src/components/leaderboard/leaderboard';

const Index = () => {
    const { viewCardsClicked, viewRules, gameStarted,leaderboardSelected, setLeaderboardSelected } = useGameContext();
    const [startGame1, setStartGame1] = useState(false);

    const toggleLeaderboard = () => {
        console.log('show leader board')
        setLeaderboardSelected(true)
    }

    return (
        <div className="homepage">
            {viewCardsClicked ? (
                <CardDisplay />
            )  : (
                <>
                    {!gameStarted ? (
                        <>
                        <div
                        style={{
                            position:'relative',
                            zIndex:'100',
                            display:'flex',
                            flexDirection:'column',
                            alignItems:'center'
                        }}>

                       
                            <h2 className="game-title"
                                style={{
                                    color: 'white',
                                   
                                }}>
                                The Quantum Card Game
                            </h2>

                            {!leaderboardSelected ? (
                    <button style={{

                    
                        transform:'translateY(3rem)'
                    }
                    }
                        onClick={toggleLeaderboard}>
                                        Leaderboard
                                            </button>
                            ) : (
                                <Leaderboard/>
                            )}

                           
                          
                        
                            </div>
                        </>
                    ) : null}

                    {viewRules ? (
                        <>
                        <Rules/>
                        </>
                    ): null}
                    <Effects/>

                    <CardSet />
                </>
            )}
            {!gameStarted && }
          <UsernameForm/>
        </div>
    );
};

export default Index;
