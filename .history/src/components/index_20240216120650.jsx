import CardSet from "./cardset/cardset"
import react from 'react'
import Card from "./card/card"
import q3 from '../media/q3-visuals-logo.png'

const Index = () => {


    return (
        <div className="homepage">
            <CardSet/>
          <Card
          image={q3}
        </div>
    )
}

export default Index