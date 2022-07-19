import React from "react";

import { social } from '../data';
import "../styles/socials.css";


const Socials = () => {
  return (
    <ul className="socialUl">
      {social.map((item, index) => {
        return (
          <li className="socialLI" key={index}>
            <a className="socialA" href={item.href}>
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
