import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import 'bulma/css/bulma.css';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
// import { FavContext } from '../contexts/FavContext';
// import { useContext } from 'react';
import Nosotros from '../components/Nosotros/Nosotros';
import Newsletter from '../components/Newsletter/Newsletter';
import Footer from '../components/Footer/Footer';


export default function Home() {
  // const { fav, setFav } = useContext(FavContext);

  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Newsletter />
      <Nosotros />
      <Footer></Footer>
    </>
  );
}