import React, { useEffect, useRef, useState } from 'react';
import { slide as Menu } from 'react-burger-menu'; // Importa o componente da biblioteca
import './Navbar.css';
import LogoUchoaAzul from '../../Img/logouchoa-azul.png';
import LogoUchoa from '../../Img/logouchoa.png';

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
        <img
          src={isScrolled ? LogoUchoa : LogoUchoaAzul}
          alt="Logo Uchoa"
          className={`logo ${isScrolled ? 'small-logo' : 'large-logo'}`}
        />
      </div>
      {isMobile ? (
        <Menu
          right
          width={'250px'}
          className={`bm-menu ${isScrolled ? 'menu-solid' : 'menu-transparent'}`}
          burgerButtonClassName={`bm-burger-button ${isScrolled ? 'burger-solid' : 'burger-transparent'}`}
          burgerBarClassName={`bm-burger-bars ${isScrolled ? 'burger-solid' : 'burger-transparent'}`}
        >
          <a className="menu-item" href="#quem-somos">Quem somos</a>
          <a className="menu-item" href="#empreendimentos">Empreendimentos</a>
          <a className="menu-item" href="#contatos">Contatos</a>
          <button className="cta-button">Fale Conosco Agora!</button>
        </Menu>
      ) : (
        <ul className="menu-traditional">
          <li><a href="#quem-somos">Quem somos</a></li>
          <li><a href="#empreendimentos">Empreendimentos</a></li>
          <li><a href="#contatos">Contatos</a></li>
          <li><button className="cta-button">Fale Conosco Agora!</button></li>
        </ul>
      )}
    </header>
  );
}

export default Navbar;