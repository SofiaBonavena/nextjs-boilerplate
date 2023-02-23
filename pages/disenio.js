import React from 'react';
import 'bulma/css/bulma.css';
import NavBar from '../components/NavBar/NavBar';
import Hero_4 from '../components/Hero_4/Hero_4';
import Title from '../components/Title/Title';
import Projects_disenio from '../components/Projects_disenio/Projects_disenio';
import Newsletter from '../components/Newsletter/Newsletter';
import Footer from '../components/Footer/Footer';

export default function Diseno() {
  return (
    <>
      <NavBar></NavBar>
      <Hero_4></Hero_4>
      <Title>Diseño</Title>
      <Projects_disenio />
      <Newsletter />
      <Footer></Footer>
    </>
  );
}
