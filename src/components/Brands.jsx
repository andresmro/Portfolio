

import { brands } from "../data";

import "../styles/brands.css";

const Brands = () => {
  return (
    <section className="section-brand">
      <div className="div-brand">
        {brands.map((brand, index) => {
          return (
            <div key={index}>
              <img className="brands-img" src={brand.img} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
