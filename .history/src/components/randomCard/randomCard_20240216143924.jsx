import React from "react";
import abu6 from '../../media/aboubacar-6.jpg';
import abu5 from '../../media/aboubacar-5-fire.png';
import kakashi from '../../media/kakashi_susanoo.jpg';
import majin from '../../media/majin-vegeta.png';
import sasuke from '../../media/sasuke.jpg';
import vegeta from '../../media/vegeta-battle.png';
import obito from '../../media/war-obito.jpg';
import q3 from '../../media/q3-visuals-logo.png';


const RandomCard = ({images,id}) => {

    const cards = [
        abu6,
        abu5,
        kakashi,
        majin,
        sasuke,
        vegeta,
        obito
    ]

    return (
        <img className="card random"
        src={abu5}
        id={id}/>

    
    )
}

export default RandomCard