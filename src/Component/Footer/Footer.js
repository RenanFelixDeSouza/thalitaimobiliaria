import React from 'react';
import './Footer.css';
import logo from '../../Img/logouchoa.png'; 
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Uchôa Corretora Imobiliária" />
        </div>
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Atendimento</h4>
            <p>
              <a
                href="https://wa.me/559291039081?text=Olá,%20vim%20através%20do%20site%20e%20gostaria%20de%20saber%20mais%20informações."
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-link"
              >
                +55 92 9103-9081 - Thalita Uchoa
              </a>
            </p>
            <p>
              <a
                href="https://wa.me/559281520223?text=Olá,%20vim%20através%20do%20site%20e%20gostaria%20de%20saber%20mais%20informações."
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-link"
              >
                +55 92 8152-0223 - Diogo Freitas
              </a>
            </p>
            <p>Email: contato@uchoa.com.br</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Uchôa Corretora Imobiliária - Direitos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;