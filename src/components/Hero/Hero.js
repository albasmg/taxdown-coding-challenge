import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__header">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="hero__claim">
        <div>
          <h1>
            <span>Hey!</span> Could you fill this form for us?
          </h1>
          <Link to="/submissions">
            <p className="hero__link">Show all submissions</p>
          </Link>
        </div>
        <div className="hero__decoration"></div>
      </div>
    </section>
  );
};

export default Hero;
