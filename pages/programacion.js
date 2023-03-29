import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import 'bulma/css/bulma.css';
import Title from '../components/Title/Title';
import Newsletter from '../components/Newsletter/Newsletter';
import Footer from '../components/Footer/Footer';
import Hero_5 from '../components/Hero_5/Hero_5';
import Projects_prog from '../components/Projects_prog.js/Projects_prog';

export default function Programacion() {
  return (
    <>
      <NavBar></NavBar>
      <Hero_5></Hero_5>
      <Title>Programación</Title>
      <Projects_prog />
      <Newsletter />
      <Footer></Footer>
    </>
  );
}
