import React from "react";
import q3 from '../../media/q3-visuals-logo.png'
import Card from "../card/card";
import './cardset.css'


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
    <div className="cardset-wrapper">

   
    <div className="cardset-container">
        {cards.map((card,index) => (
            <Card
            image={q3}
            // altImage={card.alt}
            // isClicked={false}
            />
         
        )}
    </div>
    </div>
)


}

export default CardSet