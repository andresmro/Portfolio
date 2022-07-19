import React from 'react'

import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import About from './components/About';
import Skills from './components/Skills';
import PortFolio from './components/PortFolio';


import './App.css';


const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Brands />
      <About />
      <Skills/>
      <PortFolio/>
      <div style={{ height: '1000px' }}></div>
    </div>
  );
};

export default App;
