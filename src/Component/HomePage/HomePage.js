import React from 'react';
import { FaHome, FaTools, FaImage } from 'react-icons/fa'; // Importando ícones do react-icons
import Slider from 'react-slick'; // Importando o carrossel
import './HomePage.css';
import ThalitaSemFundo from '../../Img/Thalita/thalita-sem-fundo.jpg';
import Amazonas from '../../Img/Projects/amazonas.jpg';
import Amazonas2 from '../../Img/Projects/amazonas-2.jpg';
import Amazonas3 from '../../Img/Projects/amazonas-3.png';
import Acutuba from '../../Img/Projects/mansoes-de-acutuba.jpg';
import Collina from '../../Img/Projects/portal-da-collina.jpg';
import Primaville from '../../Img/Projects/primaville.jpg';
import Lacus from '../../Img/Projects/lacus.png';
import Tellus from '../../Img/Projects/TELLUS.png';
import TerraAmazonia from '../../Img/Projects/terramazonia.jpg';
import { MdOutlineEnergySavingsLeaf } from 'react-icons/md';
import { Link } from 'react-router-dom'; // Importar Link

// Função para seta "próxima"
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--primary-color)',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        zIndex: 1,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        position: 'absolute',
        right: '-100px',
        top: '50%',
        transform: 'translateY(-50%)',
      }}
      onClick={onClick}
    >
    </div>
  );
}

// Função para seta "anterior"
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--secondary-color)',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        zIndex: 1,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        position: 'absolute',
        left: '-100px',
        top: '50%',
        transform: 'translateY(-50%)',
      }}
      onClick={onClick}
    >
    </div>
  );
}

function HomePage() {
  const galleryImages = [
    Amazonas,
    Amazonas2,
    Tellus,
    TerraAmazonia,
    Amazonas,
    Amazonas2,
    Tellus,
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Exibe 1 slide em telas pequenas
          slidesToScroll: 1,
          arrows: false, // Mantém as setas
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Exibe 1 slide em telas muito pequenas
          slidesToScroll: 1,
          arrows: false, // Mantém as setas
        },
      },
    ],
  };

  return (
    <div className="homepage">
      {/* Seção com imagem */}
      <div className="hero-section"></div>

      {/* Texto abaixo da imagem */}
      <div className="hero-text">
        <h1>Realizando sonhos</h1>
        <p>
          A Constroi Incorporadora, há mais de 40 anos, trabalha para a realização dos sonhos seus e de sua família.
          Seja para construir ou investir, nós temos os melhores bairros planejados, nas melhores regiões do Brasil.
        </p>
      </div>

      {/* Cards abaixo */}
      <div className="cards-section" style={{ marginBottom: '20px' }}>
        <div className="card">
          <div className="card-icon">
            <FaHome size={40} color="#1a2a4a" />
          </div>
          <h3>Segurança</h3>
          <p>
            Residenciais estruturados. Condomínios com sistemas de portaria.
            Registros de Incorporação e Licenças Ambientais.
          </p>
        </div>
        <div className="card">
          <div className="card-icon">
            <MdOutlineEnergySavingsLeaf size={40} color="#1a2a4a" />
          </div>
          <h3>Infraestrutura</h3>
          <p>
            Pavimentação asfáltica, rede elétrica, rede de água potável,
            rede de esgoto e rede de águas pluviais.
          </p>
        </div>
        <div className="card">
          <div className="card-icon">
            <FaTools size={40} color="#1a2a4a" />
          </div>
          <h3>Pronto para construir</h3>
          <p>Execute o Projeto dos seus sonhos.</p>
        </div>
      </div>

      {/* Seção de galeria de fotos com carrossel */}


      {/* Novo campo abaixo dos cards */}
      <div className="opportunities-section">
        <div className="opportunities-content">
          <div className="opportunities-text">
            <h2>Preparamos sempre grandes oportunidades para você!</h2>
            <p>
              Residenciais com infraestrutura e próximos da natureza, para proporcionar a qualidade de vida que você merece.
              Seja para morar ou investir, preparamos sempre um bom negócio sem burocracia e com várias facilidades de compra.
            </p>
          </div>
          <div className="opportunities-image">
            <img src={ThalitaSemFundo} alt="Imagem de uma mulher" />
          </div>
        </div>
      </div>

      {/* Seção de projetos */}
      <div className="projects-section">
        <h2>Nossos Empreendimentos</h2>
        <div className="projects-grid">
          <div className="project-card highlight-launch">
            {Lacus ? (
              <img src={Lacus}  alt="Residencial Lacus" />
            ) : (
              <FaImage size={80} color="#ccc" />
            )}
            <h3>Residencial Lacus</h3>
            <span className="launch-badge">Lançamento</span>
            <Link to="/lacus">
              <button>Conheça</button>
            </Link>
          </div>
          <div className="project-card highlight-launch">
            {Tellus ? (
              <img src={Tellus} alt="Residencial Tellus" />
            ) : (
              <FaImage size={80} color="#ccc" />
            )}
            <h3>Residencial Tellus</h3>
            <span className="launch-badge">Lançamento</span>
            <Link to="/tellus">
              <button>Conheça</button>
            </Link>
          </div>
          <div className="project-card highlight-launch">
            {Amazonas3 ? (
              <img src={Amazonas3} alt="Residencial Amazonas III" />
            ) : (
              <FaImage size={80} color="#ccc" />
            )}
            <h3>Residencial Amazonas III</h3>
            <span className="launch-badge">Lançamento</span>
            <Link to="/amazonas">
              <button>Conheça</button>
            </Link>
          </div>
          </div>
          <div className="projects-grid">

          <div className="project-card">
            {Amazonas ? (
              <img src={Amazonas} alt="Residencial Amazonas" />
            ) : (
              <FaImage size={80} color="#ccc" />
            )}
            <h3>Residencial Amazonas</h3>
            <button>Conheça</button>
          </div>
          <div className="project-card">
            {Amazonas2 ? (
              <img src={Amazonas2} alt="Residencial Amazonas II" />
            ) : (
              <FaImage size={80} color="#ccc" />
            )}
            <h3>Residencial Amazonas II</h3>
            <button>Conheça</button>
          </div>
          <div className="project-card">
            {Acutuba ? (
              <img src={Acutuba} alt="Mansões de Acutuba" />
            ) : (
              <FaImage size={80} color="#ccc" />
            )}
            <h3>Mansões de Acutuba</h3>
            <button>Conheça</button>
          </div>
          <div className="project-card">
            {Collina ? (
              <img src={Collina} alt="Portal da Collina" />
            ) : (
              <FaImage size={80} color="#ccc" />
            )}
            <h3>Portal da Collina</h3>
            <button>Conheça</button>
          </div>
          <div className="project-card">
            {Primaville ? (
              <img src={Primaville} alt="Residencial Primaville" />
            ) : (
              <FaImage size={80} color="#ccc" />
            )}
            <h3>Residencial Primaville</h3>
            <button>Conheça</button>
          </div>
          <div className="project-card">
            {TerraAmazonia ? (
              <img src={TerraAmazonia} alt="Terramazonia" />
            ) : (
              <FaImage size={80} color="#ccc" />
            )}
            <h3>Terramazonia</h3>
            <button>Conheça</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;