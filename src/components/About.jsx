

import Image from "../assets/img/about.webp";

import "../styles/about.css";

const About = () => {
  return (
    <section id="about" className="section-about">
      <div className="div-about">
        <div className="imgs-about">
          <img className="image-about" src={Image} alt="" />
          <div className="div2-about">

           
                <h1 className="h1-about">About</h1>
                <h2 className="h2-about">
                    Andres Mateus
                </h2>
                <p className="p-about">Web developer</p>
            

                <hr className="hr-about"/>
                <p className="p2-about">
                I started my journey in 2018 when I was in high school, learning web development on my own. After graduating, i entered college, where I continued my studies in order to improve my skills as a developer. In 2021 I started to learn ReactJs and from this point I started to dive deeper into the world of web development.
                </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
