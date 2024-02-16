import React from "react";
import './card.css'

const Card = ({image, altImage, isClicked}) => {

    return (

        
            <img className="card"
            src={isClicked ? altImage : image}
            />
      
    )
}

export default Card