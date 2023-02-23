import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import 'bulma/css/bulma.css';
import Title from '../components/Title/Title';
import Footer from '../components/Footer/Footer';
import Hero_3 from '../components/Hero_3/Hero_3';

export default function Favoritos() {
  return (
    <>
      <NavBar></NavBar>
      <Hero_3></Hero_3>
      <Title>Favoritos</Title>
      <Footer></Footer>
    </>
  );
}
