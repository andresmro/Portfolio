import React from "react";
import { motion } from 'framer-motion';

import reactI from "../assets/reactIcon.png";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section id="home" className="section-hero">
      <div className="hero-div">
        <div className="home-div">
          {/* left side */}
          <div className="left-side">
            <p className="p-hi">Hey, I´m Andres 🤙 </p>
            <h1 className="h1-me"> I´m a future web developer</h1>
            <p className="p-info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              beatae ea libero eius, reiciendis modi eveniet magni at. Eligendi,
              voluptates!
            </p>
            <button className="btn-hero"> Work with me </button>
          </div>
          {/* right side */}
          <div className="image-side">
            <motion.img 
              animate={{ rotate: 360 }}
              transition={{
                  ease: "linear",
                  duration: 15,
                  repeat: Infinity,                 
              }}
              className="img-me" src={reactI} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
