import React from "react";

import { useGameContext } from "../context";
import goku from 'src/media/goku-vs-jiren.jpg'

const ResultScreen = () => {

    const {totalScore} = useGameContext()

    return (
        <div className="result-container">

        </div>
    )
}