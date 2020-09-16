import React from 'react';
import logo from '../../assets/images/logo.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__header">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="hero__claim">
        <h1>
          <span>Hey!</span> Could you fill this form for us?
        </h1>
        <div className="hero__div"></div>
      </div>
    </section>
  );
};

export default Hero;
