import React from "react";

import { useGameContext } from "../context";
import goku from '../../media/goku-vs-jiren.jpg'
import clown from '../media/Emoji_Icon_-_Clown_emoji_1024x1024.png.webp'

const ResultScreen = () => {

    const {totalScore} = useGameContext()

    return (
        <div className="result-container">

        </div>
    )
}