import React from 'react';
import './hero.css';
const Hero = ({ data }) => {
  return (
    <div>
      <div className="mb-4 hero">
        <img src={data.hero_1_image} alt="hero" width={'100%'} />
        <div className="hero-info col-md-6 px-0">
          <h1 className="display-4 fst-italic">{data.hero_1_title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
