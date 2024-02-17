import React from "react";
import './card.css'

const Card = ({image, altImage, isClicked,id,mouseEnter,
mouseLeave,style}) => {

    return (

        
            <img className="card"
            src={isClicked ? altImage : image}
            id={id}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            style={style}
            
            />
      
    )
}

export default Card