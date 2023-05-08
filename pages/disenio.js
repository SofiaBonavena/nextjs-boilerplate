import React from 'react';
import 'bulma/css/bulma.css';
import NavBar from '../components/NavBar/NavBar';
import Hero from '../components/Hero/Hero';
import Title from '../components/Title/Title';
import Projects_disenio from '../components/Projects_disenio/Projects_disenio';
import Newsletter from '../components/Newsletter/Newsletter';
import Footer from '../components/Footer/Footer';
import imagediseno from '../public/assets/herodisenio.png';

export default function Diseno() {
  return (
    <>
      <NavBar />
      <Hero image={imagediseno} />
      <Title>Diseño</Title>
      <Projects_disenio />
      <Newsletter />
      <Footer />
    </>
  );
}
