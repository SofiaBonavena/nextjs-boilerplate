import React from 'react';
import styles from '../Hero/Hero.module.css';

const Hero = ({image}) => {
  console.log(image.src);
  return (
    <section
      className={`hero is-large ${styles['container']}`}
      style={{ backgroundImage: `url('${image.src}')`}}
    >
      <div className="hero-body"></div>
    </section>
  );
};

export default Hero;
