import CardSet from "./cardset/cardset"
import react from 'react'
import Card from "./card/card"

const Index = () => {


    return (
        <div className="homepage">
            <CardSet/>
            <Card
            image={q3}
            />
        </div>
    )
}

export default Index