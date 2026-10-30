import React from 'react';
import './Footer.css';

export default function Footer({ onToggleView }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <svg className="logo-svg" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 30L20 10L32 30" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 20L20 10L26 20" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 30H28" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
            </svg>
            <span className="logo-text">CLN cut</span>
          </div>
          <p className="footer-tagline">
            A verdadeira beleza reside sob a precisão de cada corte. A essência do visagismo e do cuidado masculino de alto padrão.
          </p>
        </div>

        <div className="footer-links">
          <h4>Navegação</h4>
          <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#skills">Habilidades</a></li>
            <li><a href="#work">Galeria</a></li>
            <li><a href="#about">Sobre a CLN</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Sistema & Contato</h4>
          <ul>
            <li>
              <button className="footer-system-link" onClick={onToggleView}>
                ⚙️ Acessar Painel de Gestão
              </button>
            </li>
            <li><a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">WhatsApp Oficial</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram @CLNcut</a></li>
            <li><span>São Paulo • SP</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-container">
          <p>© {currentYear} CLN cut • Sistema & Barbearia. Todos os direitos reservados.</p>
          <p className="credit">Inspirado na referência de alta precisão</p>
        </div>
      </div>
    </footer>
  );
}
