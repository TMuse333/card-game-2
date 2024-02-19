import React from 'react';
import { Carousel } from 'react-bootstrap';

import abu6 from '../../media/aboubacar-6.jpg';
import abu5 from '../../media/aboubacar-5-fire.png';
import kakashi from '../../media/kakashi_susanoo.jpg';
import majin from '../../media/majin-vegeta.png';
import sasuke from '../../media/sasuke.jpg';
import vegeta from '../../media/vegeta-battle.png';
import obito from '../../media/war-obito.jpg';
import q3 from '../../media/q3-visuals-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cardDisplay.css'
import { useGameContext } from '../context';


const CardDisplay = () => {
  const carouselItems = [
    { image: abu6, description: 'Aboubacar a warrior, from guadeloupe islands',id:'image-1' },
    { image: abu5, description: 'Aboubacar a warrior, from guadeloupe islands',id:'image-2' },
    { image: kakashi, description: 'Kakashi Hatake with double mangekyou sharingan',id:'image-3' },
    { image: majin, description: 'Majin Vegeta',id:'image-4' },
    { image: sasuke, description: 'Sasuke Uchiha',id:'image-5' },
    { image: vegeta, description: 'Vegeta, the prince of all saiyans',id:'image-6' },
    { image: obito, description: 'War arc obito',id:'image-7' },
    { image: q3, description: 'Someone using the power of the quantum realm',id:'image-8' },
  ];

  const {setViewCardsClicked} = useGameContext()

  const handleClick = () => {
    setViewCardsClicked(false)
  }

  return (
    <div className='carousel-container'>

  <button onClick={handleClick}
  className='card-button'
  >Return</button>

    <Carousel
    interval={null}
    >
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100 carousel-image" src={item.image} alt={`Slide ${index + 1}`}
           style={{  margin:'0 auto',
        //    objectPosition:'0% 10%'
         }} 
id={item.id}
           />
          <Carousel.Caption>
            <div >
            <p
            style={{
                color:'black',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
            }}>{item.description}<br/>
            <button onClick={}>
                return</button></p>
           
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
  );
};

export default CardDisplay;
