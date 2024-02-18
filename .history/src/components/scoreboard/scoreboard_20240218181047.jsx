import React from "react";
import { useContext } from "react";
import { GameProvider } from "../context";
import './scoreboard.css'

const Scoreboard = () => {

const {totalScore} = useContext
    return (
        <div className="scoreboard-container">
            <h2>Score: 100</h2>
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