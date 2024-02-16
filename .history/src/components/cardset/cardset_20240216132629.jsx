import React from "react";
import q3 from '../../media/q3-visuals-logo.png'
import Card from "../card/card";
import './cardset.css'
import abu6 from '../../media/aboubacar-6.jpg'
import abu5 from '../../media/aboubacar-5-fire.png'
import kakashi from '../../media/kakashi_susanoo.jpg'
import majin from '../../media/majin-vegeta.png'
import itachi from '../../media/Real-itachi-susanoo.jpg'
import vegeta from '../../media/vegeta-battle.png'
import obito from '../../media/war-obito.jpg'




const CardSet = () => {

    const cards = [
        {
        img:q3,
        alt:q3,
        id:'q3'
    },
    {
        img:abu6,
        alt:q3,
        id:'abu6'
    },
    {
        img:majin,
        alt:q3,
        id:'majin'
    },
    {
        img:kakashi,
        alt:q3,
        id:'kakashi'
    },
    {
        img:itachi,
        alt:q3
    },
    {
        img:vegeta,
        alt:q3
    },
    {
        img:obito,
        alt:q3
    },
    {
        img:abu5,
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