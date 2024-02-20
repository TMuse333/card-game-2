import React from 'react';
import CardSet from "../src/components/cardset/cardset";
import Card from "../src/components/card/card";
import q3 from '../media/q3-visuals-logo.png';
import abu5 from '../media/aboubacar-6.jpg';
import RandomCard from "../src/components/randomCard/randomCard";
import Clock from "../src/components/clock/clock";
import { useGameContext } from "../src/components/context";
import { useState } from "react";
import Scoreboard from "../src/components/scoreboard/scoreboard";
import CardDisplay from "../src/components/cardDisplay/cardDisplay";
import Rules from "../src/components/rules/rules";
import Effects from '../src/components/effects/effects';

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
        </div>
    );
};

export default Index;
