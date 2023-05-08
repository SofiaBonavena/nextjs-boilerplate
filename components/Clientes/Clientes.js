import React from 'react';
import styles from './Clientes.module.css';
import Title from '../Title/Title';
import Marquee from 'react-easy-marquee';
import Image1 from '../../public/assets/cliente1.jpg';
import Image2 from '../../public/assets/cliente2.jpg';
import Image3 from '../../public/assets/cliente3.jpg';
import Image4 from '../../public/assets/cliente4.jpg';
import Image5 from '../../public/assets/cliente5.jpg';
import Image6 from '../../public/assets/cliente6.jpg';
import Image from 'next/image';

const Collection = () => {
  const images = [Image1, Image2, Image3, Image4, Image5, Image6];
  return (
    <section>
      <Title>Trusted By</Title>
      <div className={`${styles['marquee_container']}`}>
        <Marquee
          className={`${styles['marquee']}`}
          duration={60000}
          reverse={true}
          pauseOnHover={true}
          margin="100px"
          height="150px"
        >
          <div className="img_container">
            {images.map((image, index) => (
              <Image key={index} src={image} alt="imagen" />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Collection;
