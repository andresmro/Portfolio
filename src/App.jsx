import React from 'react'

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import PortFolio from './components/PortFolio';
import Services from './components/Services';
import Contact from './components/Contact';
import BtnTop from './components/BtnTop';


import './App.css';


const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills/>
      <PortFolio/>
      <Services/>
      <Contact/>
      <BtnTop/>
    </div>
  );
};

export default App;
