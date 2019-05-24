import React from 'react';
import './Hero.scss';

function Hero() {
  return (
    <div className="Hero">
        <h1 className="hero-banner">
            More than <span className="hero-banner__bold"> 3,000 talks </span> to stir your curiosity!
        </h1>
        <h2 className="hero-banner__blurb">Find the right one for you</h2>
    </div>
  );
}

export default Hero;
