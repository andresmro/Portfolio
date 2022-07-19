import React from "react";

//aqui importamos la data de navegacion
import { navigation } from "../data";

import { Link } from "react-scroll";
import "../styles/nav.css";

const Nav = () => {
  return (
    <nav>
      <ul className="navList">
        {navigation.map((item, index) => {
          return (
            <li className="navLi" key={index}>
              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="navLink"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
