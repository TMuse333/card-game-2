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
    { image: abu6, description: 'Aboubacar a warrior, from guadeloupe islands' },
    { image: abu5, description: 'Aboubacar a warrior, from guadeloupe islands' },
    { image: kakashi, description: 'Kakashi Hatake with double mangekyou sharingan' },
    { image: majin, description: 'Majin Vegeta' },
    { image: sasuke, description: 'Sasuke Uchiha' },
    { image: vegeta, description: 'Vegeta, the prince of all saiyans' },
    { image: obito, description: 'War arc obito' },
    { image: q3, description: 'Someone using the power of the quantum realm' },
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
            <div style={{
                positon:'relative'
                transform:'translateY(5rem)'
            }}>
            <p
            style={{
                color:'black',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
            }}>{item.description}</p>
            <button
            style={{
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                color:'black',
                transform:'scale(0.75)'
            }}>
                Return
            </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
  );
};

export default CardDisplay;
