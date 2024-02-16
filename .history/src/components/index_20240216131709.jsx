import CardSet from "./cardset/cardset"
import react from 'react'
import Card from "./card/card"
import q3 from '../media/q3-visuals-logo.png'
import abu5 from '../media/aboubacar-6.jpg'
import RandomCard from "./randomCard/randomCard"

const Index = () => {


    return (
        <div className="homepage">
            <RandomCard
            id='abu5'/>
            <CardSet/>
         
          
        </div>
    )
}

export default Index