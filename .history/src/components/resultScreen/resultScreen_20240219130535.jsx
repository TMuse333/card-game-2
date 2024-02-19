import React from "react";

import { useGameContext } from "../context";
import goku from '../../media/goku-vs-jiren.jpg'
import clown from '../../media/Emoji_Icon_-_Clown_emoji_1024x1024.png.webp'
import itachi from '../../media/Real-itachi-susanoo.jpg'

const ResultScreen = () => {

    const {totalScore} = useGameContext()

    const score = totalScore >= 1500 ? 'high' :
    totalScore < 1500 && totalScore >= 500 ? 'medium' :
    'low'

    const result = {
        title: score === 'high' ? `Wow! ${tot}`
    }

    return (
        <div className="result-container">

        </div>
    )
}