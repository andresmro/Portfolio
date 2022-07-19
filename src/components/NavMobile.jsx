import React, { useState } from "react";

import { navigation } from "../data";
import { XIcon } from "@heroicons/react/outline";
import { MenuAlt3Icon } from "@heroicons/react/outline";

import Socials from "./Socials";

import { motion } from "framer-motion";

import { Link } from "react-scroll";

import "../styles/navMovile.css";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  // framer motion variants
  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <nav className="nav-container">
      <div onClick={() => setIsOpen(true)} className="nav-div">
        <MenuAlt3Icon className={`${isOpen ? "menu-iconN" : "menu-icon"}`} />
      </div>

      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="motion-div"
      ></motion.div>

      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className={`${isOpen ? "motion-ulA" : "motion-ulI"} motion-ulN`}
      >
        <div onClick={() => setIsOpen(false)} className="close-icon">
          <XIcon className="xicon" />
        </div>
        {navigation.map((item, index) => {
          return (
            <li key={index} className="navigation-li">
              <Link
                to={item.href}
                smooth={true}
                duration={500}
                offset={-70}
                className='link-li'
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </motion.ul>
    </nav>
  );
};

export default NavMobile;
