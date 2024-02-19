import React from "react";

import { useGameContext } from "../context";
import goku from '../../media/goku-vs-jiren.jpg'

const ResultScreen = () => {

    const {totalScore} = useGameContext()

    return (
        <div className="result-container">

        </div>
    )
}