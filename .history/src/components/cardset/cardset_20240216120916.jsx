import React from "react";
import q3 from '../../media/q3-visuals-logo.png'
import Card from "../card/card";
import './cardset.css'
import abu5 from '../media/aboubacar-6.jpg'


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


   <div className="card-wrapper">


    <div className="cardset-container">
        {cards.map((card,index) => (
            <Card
            image={card.img}
            altImage={card.alt}
            isClicked={false}
            />
         
        ))}
    </div>
    </div>

)


}

export default CardSet