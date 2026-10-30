import React from 'react';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Button from '../../common/Button/Button';
import { servicesData } from '../../../data/services';
import './Services.css';

export default function Services({ onSelectService }) {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <SectionTitle 
          subtitle="Nosso Menu & Procedimentos" 
          title="Serviços Exclusivos" 
          description="Procedimentos executados com técnicas cirúrgicas, produtos botânicos premium e atenção obsessiva aos detalhes."
        />

        <div className="services-grid">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className={`service-card glass-panel ${service.popular ? 'service-card-popular' : ''}`}
            >
              {service.popular && <span className="popular-badge">Mais Escolhido</span>}

              <div className="service-top">
                <span className="service-duration">⏱ {service.duration}</span>
                <span className="service-price">{service.price}</span>
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <div className="service-footer">
                <Button 
                  variant={service.popular ? 'primary' : 'outline-pill'} 
                  size="sm"
                  icon="↗"
                  onClick={() => onSelectService(service)}
                >
                  Agendar horário
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
