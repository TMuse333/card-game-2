import React, { useState } from 'react';
import Slider from 'react-slick';
import { useGameContext } from '../context';
import './rules.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Rules = () => {
  const rulesList = [
    'Rule 1: Your first rule here.',
    'Rule 2: Your second rule here.',
    'Rule 3: Your third rule here.',
    // Add more rules as needed
  ];

  const { setViewRules } = useGameContext();

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
  };

  return (
    <div className='rules-container'>
      <Slider {...settings}>
        {rulesList.map((rule, index) => (
          <div key={index} className='rule-slide'>
            <p>{rule}</p>
          </div>
        ))}
      </Slider>
      <p className='current-slide'>Current Slide: {currentSlide + 1}</p>
      <button
        onClick={() => {
          setViewRules(false);
        }}
      >
        Return
      </button>
    </div>
  );
};

export default Rules;
