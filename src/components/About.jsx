

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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex impedit aspernatur eveniet tempore a mollitia fugiat repudiandae hic magni nesciunt asdnba sd ex lit oma get dat enveint asdadas.
                </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
