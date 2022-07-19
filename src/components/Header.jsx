import React, { useEffect, useState } from 'react';

import Nav from './Nav';
import NavMovile from './NavMobile';
import Socials from './Socials';


import '../styles/header.css';

const Header = () => {

    const [bg, setBg] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 50 ? setBg(true) : setBg(false); //aqui le digo que cambie el bg dependiendo si el scroll en y pasa de 50
        })
    });
    
  return (
    <header className={`${bg ? 'bg-active' : 'bg-noActive'}`}>
        <div className='head'>
            {/* logo */}
            <a className='headerName' href='#'>
                Andres Mateus
            </a>
            {/* nav */}
            <div className='navh'>
                <Nav/>
            </div>
            {/* socials */}
            <div className='socialsh'>
                <Socials/>
            </div>
            {/* nav mobile */}
            <div className='navMovileh'>
                <NavMovile/>
            </div>
        </div>
    </header>
  )
}

export default Header;