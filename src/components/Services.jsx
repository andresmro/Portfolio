import { services } from "../data";

import "../styles/services.css";

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-div1">
        <div className="services-div2">
          <h1 className="services-h1">Services</h1>
          <h2 className="services-h2">What i do for clients</h2>
          <p className="services-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            magnam ducimus excepturi nobis repellat corporis eveniet ipsam quae
            accusantium, dolores provident consequuntur neque mollitia, sequi
            eaque soluta adipisci dignissimos aspernatur.
          </p>
        </div>
        <div className="services-items-grid">
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div key={index} className="service-item">
                <div className="services-icon">{icon}</div>
                <h4 className="services-h4"> {name} </h4>
                <p className="services-desc"> {description} </p>
              </div>
              
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
