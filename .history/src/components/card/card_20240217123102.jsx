import React from "react";
import './card.css'

const Card = ({image, altImage, isClicked,id,mouseEnter,
mouseLeave,style,handleClick}) => {

    return (

        
            <img className="card"
            src={isClicked ? altImage : image}
            id={id}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            style={style}
            onClick={}
            />
      
    )
}

export default Card