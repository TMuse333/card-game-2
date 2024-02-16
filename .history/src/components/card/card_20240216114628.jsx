import React from "react";
import './card.css'

const Card = ({image, altImage, isClicked}) => {

    return (

        <div className="card">
            <img src={isClicked ? altImage : image}
            />
        </div>
    )
}

export default Card