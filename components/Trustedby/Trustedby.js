import React from 'react';
import 'bulma/css/bulma.min.css';
import Marquee from 'react-easy-marquee';
// import styles from './Trustedby.module.css';
import Image1 from '../../assets/marquee1.png';
import Image from 'next/image';

const Trustedby = () => {
  const images = [Image1, Image2, Image3, Image4, Image5, Image6];

  return (
    <div className="marquee_container">
      <Marquee
        className="marquee"
        duration={20000}
        reverse={true}
        pauseOnHover={true}
        margin="60px"
        height="300px"
      >
        <picture>
          <div className="img_container">
            {images.map((image) => (
              <Image
                src={image} 
                />
            ))}
          </div>
        </picture>
      </Marquee>
    </div>
  );
};

export default Trustedby;
