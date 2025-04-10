import React from 'react';
import { FaHome, FaTools, FaImage } from 'react-icons/fa'; // Importando ícones do react-icons
import Slider from 'react-slick'; // Importando o carrossel
import './HomePage.css';
import ThalitaSemFundo from '../../Img/thalita-sem-fundo.jpg';
import Amazonas from '../../Img/residencial-amazonas.jpg';
import Amazonas2 from '../../Img/residencial-amazonas-2-imagens-empreendimentos-492x328.jpg';
import Tellus from '../../Img/Banner-TELLUS.webp';
import TerraAmazonia from '../../Img/terramazonia-imagens-empreendimentos-492x328.jpg';
import { MdOutlineEnergySavingsLeaf } from 'react-icons/md';

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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          arrows: false, 
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
      <div className="cards-section"
      style={{ marginBottom: '20px' }}>
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
          <p>
            Execute o Projeto dos seus sonhos.
          </p>
        </div>
      </div>

      {/* Seção de galeria de fotos com carrossel */}
      <div className="gallery-section" >
        <h2>Galeria de Fotos</h2>
        <Slider {...settings} className="gallery-slider">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-slide">
              <img src={image} alt={`Foto ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>


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
            {Tellus ? (
              <img src={Tellus} alt="Residencial Tellus" />
            ) : (
              <FaImage size={80} color="#ccc" />
            )}
            <h3>Residencial Tellus</h3>
            <button>Conheça</button>
          </div>
          <div className="project-card">
            {TerraAmazonia ? (
              <img src={TerraAmazonia} alt="Terramazonia" />
            ) : (
              <FaImage size={80} color="#ccc" />
            )}
            <h3>Terramazonia Condominium</h3>
            <button>Conheça</button>
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
            {Tellus ? (
              <img src={Tellus} alt="Residencial Tellus" />
            ) : (
              <FaImage size={80} color="#ccc" />
            )}
            <h3>Residencial Tellus</h3>
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