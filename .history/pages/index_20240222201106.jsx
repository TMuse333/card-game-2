import React from 'react';
import CardSet from "../src/components/cardset/cardset";

import { useGameContext } from "../src/components/context";
import { useState } from "react";

import CardDisplay from "../src/components/cardDisplay/cardDisplay";
import Rules from "../src/components/rules/rules";
import Effects from '../src/components/effects/effects';
import UsernameForm from '../src/components/usernameForm/usernameForm';

const Index = () => {
    const { viewCardsClicked, viewRules, gameStarted } = useGameContext();
    const [startGame1, setStartGame1] = useState(false);

    return (
        <div className="homepage">
            {viewCardsClicked ? (
                <CardDisplay />
            )  : (
                <>
                    {!gameStarted ? (
                        <>
                            <h2 className="game-title"
                                style={{
                                    color: 'white'
                                }}>
                                The Quantum Card Game
                            </h2>
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
