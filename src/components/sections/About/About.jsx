import React from 'react';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Button from '../../common/Button/Button';
import './About.css';

export default function About({ onOpenBooking }) {
  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <div className="about-images">
          <div className="img-wrapper main-img">
            <img 
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80" 
              alt="Mestre barbeiro CLN cut" 
            />
          </div>
          <div className="experience-badge glass-panel">
            <span className="years">10+</span>
            <span className="text">Anos de Domínio</span>
          </div>
        </div>

        <div className="about-content">
          <SectionTitle 
            subtitle="Filosofia CLN" 
            title="A verdadeira beleza reside em cada corte" 
            center={false}
          />

          <p className="about-text">
            Na <strong>CLN cut</strong>, acreditamos que um corte não é apenas estética — é uma declaração de autoridade, identidade e confiança.
          </p>

          <p className="about-text">
            Combinamos a precisão cirúrgica das lâminas japonesas, a consultoria de visagismo sob medida e um ambiente refinado com café premium e acústica intimista.
          </p>

          <div className="about-features">
            <div className="feature-item">
              <span className="feature-bullet">◆</span>
              <div>
                <strong>Visagismo Estruturado</strong>
                <p>Estudamos os ângulos do seu rosto antes de encostar a lâmina.</p>
              </div>
            </div>

            <div className="feature-item">
              <span className="feature-bullet">◆</span>
              <div>
                <strong>Higienização & Lâminas Únicas</strong>
                <p>Protocolo hospitalar de esterilização e lâminas 100% descartáveis.</p>
              </div>
            </div>

            <div className="feature-item">
              <span className="feature-bullet">◆</span>
              <div>
                <strong>Atendimento Sem Espera</strong>
                <p>Agendamento digital com tolerância zero de atraso.</p>
              </div>
            </div>
          </div>

          <div className="about-action">
            <Button variant="primary" size="md" onClick={onOpenBooking}>
              Garantir meu Horário
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
