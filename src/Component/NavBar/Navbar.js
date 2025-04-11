import React, { useEffect, useRef, useState } from 'react';
import { slide as Menu } from 'react-burger-menu'; // Importa o componente da biblioteca
import { Link } from 'react-router-dom'; // Importa o componente Link
import './Navbar.css';
import LogoUchoaAzul from '../../Img/Logo/logouchoa-azul.png';
import LogoUchoa from '../../Img/Logo/logouchoa.png';

function Navbar() {
  const navbarRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2) {
        setIsScrolled(true);
        if (navbarRef.current) {
          navbarRef.current.classList.remove("transparent");
          navbarRef.current.classList.add("solid");
        }
      } else {
        setIsScrolled(false);
        if (navbarRef.current) {
          navbarRef.current.classList.remove("solid");
          navbarRef.current.classList.add("transparent");
        }
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header ref={navbarRef} className={`navbar ${isScrolled ? 'solid' : 'transparent'}`}>
      <div className="logo-container">
        <Link to="/">
          <img
            src={isScrolled ? LogoUchoa : LogoUchoaAzul}
            alt="Logo Uchoa"
            className={`logo ${isScrolled ? 'small-logo' : 'large-logo'}`}
          />
        </Link>
      </div>
      {isMobile ? (
        <Menu
          right
          width={'250px'}
          className={`bm-menu ${isScrolled ? 'menu-solid' : 'menu-transparent'}`}
          burgerButtonClassName={`bm-burger-button ${isScrolled ? 'burger-solid' : 'burger-transparent'}`}
          burgerBarClassName={`bm-burger-bars ${isScrolled ? 'burger-solid' : 'burger-transparent'}`}
        >
          <a className="menu-item" href="#quem-sou">Quem sou</a>
          <a className="menu-item" href="#empreendimentos">Empreendimentos</a>
          <button className="cta-button">Fale Conosco Agora!</button>
        </Menu>
      ) : (
        <ul className="menu-traditional">
          <li><a href="#quem-sou">Quem sou</a></li>
          <li><a href="#empreendimentos">Empreendimentos</a></li>
          <li><button className="cta-button">Fale Conosco Agora!</button></li>
        </ul>
      )}
    </header>
  );
}

export default Navbar;