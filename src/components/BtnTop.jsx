import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { ChevronUpIcon } from "@heroicons/react/outline";

import "../styles/btnUp.css";

const BtnTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false);
    });
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    show && (
      <button onClick={ () => scrollToTop() } className="btn-up">
        <ChevronUpIcon className="btn-icon" />
      </button>
    )
  );
};

export default BtnTop;
