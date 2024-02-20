import React from 'react';
import CardSet from "./cardset/cardset";
import Card from "./card/card";
import q3 from '../media/q3-visuals-logo.png';
import abu5 from '../media/aboubacar-6.jpg';
import RandomCard from "./randomCard/randomCard";
import Clock from "./clock/clock";
import { useGameContext } from "./context";
import { useState } from "react";
import Scoreboard from "./scoreboard/scoreboard";
import CardDisplay from "./cardDisplay/cardDisplay";
import Rules from "./rules/rules";

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

                    {
                        
                    }

                    <CardSet />
                </>
            )}
        </div>
    );
};

export default Index;
