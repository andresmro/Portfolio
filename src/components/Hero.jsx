
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
            <h1 className="h1-me"> Frond End Developer</h1>
            <p className="p-info">
              Currently a frond end developer, looking for challenges. 
              Developing with the best techniques and technologies to build sites that satisfy clients.

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
