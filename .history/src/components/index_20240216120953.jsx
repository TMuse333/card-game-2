import CardSet from "./cardset/cardset"
import react from 'react'
import Card from "./card/card"
import q3 from '../media/q3-visuals-logo.png'
import abu5 from '../../media/aboubacar-6.jpg'

const Index = () => {


    return (
        <div className="homepage">
            {/* <CardSet/> */}
          <Card
          image={q3}
          />

          <img src={q3}
          className='card'
          />
        </div>
    )
}

export default Index