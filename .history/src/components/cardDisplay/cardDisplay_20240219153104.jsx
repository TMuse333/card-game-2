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


const CardDisplay = () => {
  const carouselItems = [
    { image: abu6, description: 'Aboubacar a warrior from guadeloupe islands' },
    { image: abu5, description: 'Aboubacar a warrior from guadeloupe islands' },
    { image: kakashi, description: 'Kakashi ' },
    { image: majin, description: 'Description 4' },
    { image: sasuke, description: 'Description 5' },
    { image: vegeta, description: 'Description 6' },
    { image: obito, description: 'Description 7' },
    { image: q3, description: 'Description 8' },
  ];

  return (
    <div className='carousel-container'>

  
    <Carousel>
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100 carousel-image" src={item.image} alt={`Slide ${index + 1}`}
           style={{  objectFit: 'cover',
           objectPosition:'0% 0%',maxHeight:'1000px',
        maxWidth:'800px',margin:'0 auto' }} 

           />
          <Carousel.Caption>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
  );
};

export default CardDisplay;
