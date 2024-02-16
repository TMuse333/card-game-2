import React from "react";
import './card.css'

const Card = ({image, altImage, isClicked,id,mouseEnter,
mouseLeave}) => {

    return (

        
            <img className="card"
            src={isClicked ? altImage : image}
            id={id}
            onMouseEnter
            />
      
    )
}

export default Card