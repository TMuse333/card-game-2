import React from "react";

import { useGameContext } from "../context";
import goku from '../../media/goku-vs-jiren.jpg'
import clown from '../../media/Emoji_Icon_-_Clown_emoji_1024x1024.png.webp'
import itachi from '../../media/Real-itachi-susanoo.jpg'
import './resultScreen.css'

const ResultScreen = () => {

    const {totalScore} = useGameContext()

    const score = totalScore >= 1500 ? 'high' :
    totalScore < 1500 && totalScore >= 500 ? 'medium' :
    'low'

    const result = {
        title: score === 'high' ? `Wow! You got ${totalScore} that is an ultra instinct type 
        of performance.` : score === 'medium' ? `${totalScore}. A respectable effort` :
        'Unacceptable performance, you need to get better.',
        image: score === 'high' ? goku :
        score === 'medium' ? goku :
        clown,
        id:score === 'high' ? 'goku' :
        score === 'medium' ? 'itachi' :
        'clown',
    }

    return (
        <div className="result-container">
            <h2>
                {result.title}
            </h2>
            <img src={result.image}
            id={result.id}
            className='result-image'/>

        </div>
    )
}

export default ResultScreen