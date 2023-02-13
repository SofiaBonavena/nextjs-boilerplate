import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import 'bulma/css/bulma.css';
import Hero from '../components/Hero/Hero';
import Title from '../components/Title/Title';
import Footer from '../components/Footer/Footer';
import Subtitle from '../components/Subtitle/Subtitle';
import CardInfo from '../components/CardInfo/CardInfo';
import About from '../components/About/About';
import { FavContext } from '../contexts/FavContext';
import { useContext } from 'react';
import ColumnNosotros from '../components/ColumnNosotros/ColumnNosotros';

export default function Home() {
  const { fav, setFav } = useContext(FavContext);

  return (
    <>
      {/* 
    {fav.map((item) => (
        <p key={item.id}>{item.name} </p>
    ))} 
    */}
      <NavBar></NavBar>
      <Hero></Hero>
      <Title>BienvenidosHOLAAAA todo bien</Title>
      <About />
      <Subtitle>UMAI</Subtitle>
      <Title>Proyectos</Title>
      <CardInfo />
      <Subtitle>Conocenos</Subtitle>
      <Title>Nosotros</Title>
      <ColumnNosotros />
      <Footer></Footer>
    </>
  );
}