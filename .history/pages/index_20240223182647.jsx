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
                            display:'flex',
                            flexDirection:'column'
                        }}>

                       
                            <h2 className="game-title"
                                style={{
                                    color: 'white',
                                   
                                }}>
                                The Quantum Card Game
                            </h2>
                            <button
                            <Leaderboard/>
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
          <UsernameForm/>
        </div>
    );
};

export default Index;
