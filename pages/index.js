import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import 'bulma/css/bulma.css';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Nosotros from '../components/Nosotros/Nosotros';
import Newsletter from '../components/Newsletter/Newsletter';
import Clientes from '../components/Clientes/Clientes';
import Footer from '../components/Footer/Footer';
import imageindex from '../public/assets/hero.png';

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero image={imageindex} />
      <About />
      <Projects />
      <Clientes />
      <Nosotros />
      <Newsletter />
      <Footer></Footer>
    </>
  );
}
