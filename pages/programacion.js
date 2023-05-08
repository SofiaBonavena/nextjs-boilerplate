import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import 'bulma/css/bulma.css';
import Title from '../components/Title/Title';
import Hero from '../components/Hero/Hero';
import Newsletter from '../components/Newsletter/Newsletter';
import Footer from '../components/Footer/Footer';
import Projects_prog from '../components/Projects_prog.js/Projects_prog';
import imageprog from '../public/assets/heroprog.png';

export default function Programacion() {
  return (
    <>
      <NavBar />
      <Hero image={imageprog} />
      <Title>Programación</Title>
      <Projects_prog />
      <Newsletter />
      <Footer />
    </>
  );
}
