import React, {useState} from "react";
import q3 from '../../media/q3-visuals-logo.png'
import Card from "../card/card";
import './cardset.css'
import abu6 from '../../media/aboubacar-6.jpg'
import abu5 from '../../media/aboubacar-5-fire.png'
import kakashi from '../../media/kakashi_susanoo.jpg'
import majin from '../../media/majin-vegeta.png'
import sasuke from '../../media/sasuke.jpg'
import vegeta from '../../media/vegeta-battle.png'
import obito from '../../media/war-obito.jpg'




const CardSet = () => {

    const [isHovered, setIsHovered] = useState(null)

    const handleMouseEnter = (index) => {
        setIsHovered(index)
    }

    const handleMouseLeave = () => {
        setIsHovered(null)
    }

    const style = (index) => {
        const isSelected = isHovered === index;
    
        return {
            boxShadow: isSelected ? '0 0 10px gold' : null,
        };
    };

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
        img:sasuke,
        alt:q3,
        id:'sasuke'
    },
    {
        img:vegeta,
        alt:q3,
        id:'vegeta'
    },
    {
        img:obito,
        alt:q3,
        id:'obito'
    },
    {
        img:abu5,
        alt:q3,
        id:'abu5'
    },
]

return (


   <div className="card-wrapper">


    <div className="cardset-container">
        {cards.map((card,index) => (
            <Card
            key={index}
            image={card.img}
            altImage={card.alt}
            isClicked={false}
            id={card.id}
            style={style(index)}
            mouseEnter={()=>handleMouseEnter(index)}
            mouseLeave={()=>handleMouseLeave()}
            />
         
        ))}
    </div>
    </div>

)


}

export default CardSet