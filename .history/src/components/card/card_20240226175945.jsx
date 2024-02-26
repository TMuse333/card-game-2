import React from "react";
import './card.css'
import { useGameContext } from "../context";

const Card = ({image, altImage, isClicked,id,mouseEnter,
mouseLeave,style,handleClick,altShown}) => {

    

    return (

        
            <img className="game-card"
            src={isClicked ? altImage : image}
            id={id}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            style={style}
            onClick={handleClick}
            loading='lazy'
            
            />
      
    )
}

export default Card