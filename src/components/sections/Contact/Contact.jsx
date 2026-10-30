import React from 'react';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Button from '../../common/Button/Button';
import './Contact.css';

export default function Contact({ onOpenBooking }) {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <SectionTitle 
          subtitle="Onde Estamos" 
          title="Localização & Contato" 
          description="Venha nos fazer uma visita ou marque seu horário pelos nossos canais oficiais."
        />

        <div className="contact-grid">
          {/* Card Horários */}
          <div className="contact-card">
            <div className="contact-card-icon">🕒</div>
            <h3>Horário de Atendimento</h3>
            <ul className="hours-list">
              <li>
                <span>Segunda a Sexta</span>
                <strong>09:00 - 20:00</strong>
              </li>
              <li>
                <span>Sábado</span>
                <strong>08:30 - 19:00</strong>
              </li>
              <li>
                <span>Domingo</span>
                <strong>Fechado</strong>
              </li>
            </ul>
          </div>

          {/* Card Endereço */}
          <div className="contact-card">
            <div className="contact-card-icon">📍</div>
            <h3>Nosso Espaço</h3>
            <p className="address-text">
              Av. Paulista, 1000 - Bela Vista<br />
              São Paulo - SP, 01310-100<br />
              (Estacionamento gratuito para clientes)
            </p>
            <div className="contact-btn-wrap">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline btn-sm"
              >
                Abrir no Google Maps
              </a>
            </div>
          </div>

          {/* Card Contato Rápido */}
          <div className="contact-card">
            <div className="contact-card-icon">📞</div>
            <h3>Fale Conosco</h3>
            <p className="contact-details">
              <strong>WhatsApp:</strong> (11) 99999-9999<br />
              <strong>Telefone:</strong> (11) 3214-5555<br />
              <strong>Instagram:</strong> @navalha.deouro
            </p>
            <div className="contact-btn-wrap">
              <Button variant="primary" size="sm" onClick={onOpenBooking}>
                Agendamento Rápido
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

