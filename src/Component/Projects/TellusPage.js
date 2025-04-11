import React from 'react';
import './TellusPage.css'; // Arquivo CSS para estilização

function TellusPage() {
  return (
    <div className="tellus-page">
      {/* Seção do mapa */}
      <section className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d-122.4194154846816!3d37.77492927975995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f0e0b1b1%3A0x4c7c9e8b7c8b7c8b!2sAM-070%2C%20Amazonas!5e0!3m2!1sen!2sbr!4v1616161616161"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Mapa Residencial Tellus"
        ></iframe>
      </section>

      {/* Seção do título e logo */}
      <section className="title-section">
        <h1>Residencial Tellus</h1>
        <img
          src="/assets/tellus-logo.png" // Substitua pelo caminho correto do logo
          alt="Logo Residencial Tellus"
          className="tellus-logo"
        />
      </section>

      {/* Seção da ficha técnica */}
      <section className="technical-sheet">
        <h2>Ficha técnica</h2>
        <div className="technical-details">
          {/* Coluna da descrição geral */}
          <div className="description-column">
            <h3>Descrição geral</h3>
            <ul>
              <li>Área total: 166.001,71 M²</li>
              <li>Número de unidades: 314 Lotes</li>
              <li>Medidas de lotes: 384 M²</li>
              <li>Lotes residenciais e comerciais</li>
              <li>Loteamento unifamiliar</li>
              <li>Financiamento direto com a Incorporadora em até 240 meses</li>
            </ul>
          </div>

          {/* Coluna dos indicadores */}
          <div className="indicators-column">
            <h3>Infraestrutura</h3>
            <div className="indicator">
              <span>Pavimentação asfáltica</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '100%' }}></div>
              </div>
              <span className="percentage">100%</span>
            </div>
            <div className="indicator">
              <span>Rede elétrica</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '100%' }}></div>
              </div>
              <span className="percentage">100%</span>
            </div>
            <div className="indicator">
              <span>Rede de água potável</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '100%' }}></div>
              </div>
              <span className="percentage">100%</span>
            </div>
            <div className="indicator">
              <span>Rede de esgoto</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '100%' }}></div>
              </div>
              <span className="percentage">100%</span>
            </div>
            <div className="indicator">
              <span>Rede de águas pluviais</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '100%' }}></div>
              </div>
              <span className="percentage">100%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de diferenciais */}
      <section className="differentials">
        <h2>
          O 1° Loteamento aberto com estrutura de condomínio fechado na região,
          <br />
          <strong>mas com preço de aberto!</strong>
        </h2>
        <div className="differentials-icons">
          <div className="differential-item">
            <img src="/assets/icon-regularizado.png" alt="Loteamento Regularizado" />
            <p>Loteamento Regularizado</p>
          </div>
          <div className="differential-item">
            <img src="/assets/icon-infraestrutura.png" alt="Infraestrutura Completa" />
            <p>Bairro com Infraestrutura Completa</p>
          </div>
          <div className="differential-item">
            <img src="/assets/icon-monitorada.png" alt="Portaria Monitorada" />
            <p>Portaria Monitorada</p>
          </div>
          <div className="differential-item">
            <img src="/assets/icon-comerciais.png" alt="Áreas Comerciais" />
            <p>Fácil acesso a Áreas Comerciais</p>
          </div>
          <div className="differential-item">
            <img src="/assets/icon-localizacao.png" alt="Localização Privilegiada" />
            <p>Localização Privilegiada</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TellusPage;