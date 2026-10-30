import React from 'react';
import Button from '../../common/Button/Button';
import './Hero.css';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="home" className="hero-section">
      {/* Imagem de fundo e sobreposições cinematográficas */}
      <div className="hero-backdrop"></div>
      <div className="hero-gradient-overlay"></div>

      <div className="container hero-container">
        {/* Bloco Esquerdo: Título e Botões de Ação */}
        <div className="hero-left">
          <div className="hero-title-wrapper">
            <span className="hero-accent-line"></span>
            <h1 className="hero-title">
              A beleza reside<br />
              sob a precisão do<br />
              corte
            </h1>
          </div>

          <div className="hero-actions">
            <Button 
              variant="dark-pill" 
              size="lg" 
              icon="↗" 
              onClick={onOpenBooking}
            >
              Agendar Horário
            </Button>

            <Button 
              variant="outline-pill" 
              size="lg" 
              icon="↘" 
              href="#services"
            >
              Nossos Serviços
            </Button>
          </div>
        </div>

        {/* Bloco Direito: Card Flutuante de Avaliação / Confiança (Glassmorphism) */}
        <div className="hero-right">
          <div className="trust-card glass-panel">
            <div className="trust-header">
              <span className="trust-count">6k+</span>
              <div className="avatar-group">
                <img 
                  className="avatar-img" 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" 
                  alt="Cliente 1" 
                />
                <img 
                  className="avatar-img" 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" 
                  alt="Cliente 2" 
                />
                <img 
                  className="avatar-img" 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80" 
                  alt="Cliente 3" 
                />
              </div>
            </div>
            <p className="trust-description">
              Mais de 6 mil clientes confiam na CLN cut pela alta precisão nos cortes, mestria no visagismo e um ritual impecável de cuidado.
            </p>
          </div>
        </div>
      </div>

      {/* Indicador Inferior Central: "Role para baixo" com seta rotativa */}
      <a href="#services" className="scroll-indicator-link" aria-label="Rolar para baixo">
        <div className="scroll-circle-badge">
          <svg className="scroll-svg-text" viewBox="0 0 100 100">
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
              />
            </defs>
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Role para baixo • Role para baixo •
              </textPath>
            </text>
          </svg>
          <div className="scroll-arrow">↓</div>
        </div>
      </a>
    </section>
  );
}
