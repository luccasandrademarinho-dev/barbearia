import React, { useState } from 'react';
import { useScrollPosition } from '../../../hooks/useScrollPosition';
import Button from '../../common/Button/Button';
import './Navbar.css';

export default function Navbar({ onOpenBooking, currentView, onToggleView }) {
  const isScrolled = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        {/* Logo CLN cut com ícone geométrico */}
        <a href="#home" className="logo" onClick={closeMenu}>
          <svg className="logo-svg" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 30L20 10L32 30" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 20L20 10L26 20" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 30H28" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
          </svg>
          <span className="logo-text">CLN cut</span>
        </a>

        {/* Links Centrais (Serviços, Habilidades, Galeria, Sobre, Contato) */}
        <nav className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#services" onClick={closeMenu}>Serviços</a></li>
            <li><a href="#skills" onClick={closeMenu}>Habilidades</a></li>
            <li><a href="#work" onClick={closeMenu}>Galeria</a></li>
            <li><a href="#about" onClick={closeMenu}>Sobre</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contato</a></li>
          </ul>

          <div className="nav-mobile-actions">
            <Button variant="primary" size="md" onClick={() => { closeMenu(); onOpenBooking(); }}>
              Agendar Horário
            </Button>
            <button 
              className="view-toggle-btn mobile"
              onClick={() => { closeMenu(); onToggleView(); }}
            >
              {currentView === 'client' ? '⚙️ Abrir Painel do Sistema' : '🌐 Voltar ao Site'}
            </button>
          </div>
        </nav>

        {/* Lado Direito: Alternador do Sistema & Botão "Agendar Horário" */}
        <div className="nav-right-actions">
          <button 
            className="system-badge-btn" 
            onClick={onToggleView} 
            title="Alternar entre visão do cliente e painel de controle"
          >
            <span className="system-dot"></span>
            {currentView === 'client' ? 'Painel Admin' : 'Ver Site'}
          </button>

          <Button variant="primary" size="sm" onClick={onOpenBooking}>
            Agendar Horário
          </Button>

          {/* Botão Mobile Hamburguer */}
          <button 
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Abrir menu de navegação"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
