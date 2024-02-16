import React from "react";


const Card = ({image, altImage, isClicked}) => {

    return (
        <div className="card">
            <img src={isClicked ? altImage : image}
            />
        </div>
    )
}