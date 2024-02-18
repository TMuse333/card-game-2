import React from "react";
import { useContext } from "react";
import { GameProvider, useGameContext } from "../context";
import './scoreboard.css'
import { GameProvider } from "../context";

const Scoreboard = () => {

const {totalScore} = useGameContext()
    return (
        <div className="scoreboard-container">
            <h2>Score: {totalScore}</h2>
            <div className="matches">
                <span>
                    0
                </span>
                <span>
                    0
                </span>
            </div>
        </div>
    )
}

export default Scoreboard