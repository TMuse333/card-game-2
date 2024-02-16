import React from "react";
import './card.css'

const Card = ({image, altImage, isClicked}) => {

    return (

        
            <img src={isClicked ? altImage : image}
            />
        </div>
    )
}

export default Card