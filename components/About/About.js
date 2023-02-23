import React, { useEffect } from 'react';
import styles from '../About/About.module.css';
import Title from '../Title/Title';
import Icons from '../Icons/Icons';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className={styles['container']} data-aos="fade-up">
      <Title>Bienvenidos</Title>
      <p className={styles['text_about']}>
        En esta web encontrarás proyectos realizados por estudiantes de UMAI de
        la carrera de Tecnología Multimedial
      </p>
      <Icons></Icons>
    </div>
  );
};

export default About;
