import React from "react";
import q3 from '../../media/q3-visuals-logo.png'
import Card from "../card/card";


const CardSet = () => {

    const cards = [
        {
        img:q3,
        alt:q3
    },
    {
        img:q3,
        alt:q3
    },
    {
        img:q3,
        alt:q3
    },
    {
        img:q3,
        alt:q3
    },
    {
        img:q3,
        alt:q3
    },
    {
        img:q3,
        alt:q3
    },
    {
        img:q3,
        alt:q3
    },
    {
        img:q3,
        alt:q3
    },
]

return (
    <div className="cards-container">
        {cards.map((card,index) => {
            <Card
            image={card.img}
            altImage={alt}
        })}
    </div>
)


}