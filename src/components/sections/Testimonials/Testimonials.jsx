import React from 'react';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import { testimonialsData } from '../../../data/testimonials';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <SectionTitle 
          subtitle="Avaliações" 
          title="O Que Nossos Clientes Dizem" 
          description="A confiança de quem frequenta a nossa barbearia é a nossa maior conquista."
        />

        <div className="testimonials-grid">
          {testimonialsData.map((item) => (
            <div key={item.id} className="testimonial-card">
              <div className="stars">
                {'★'.repeat(item.rating)}
              </div>
              <p className="testimonial-text">"{item.text}"</p>
              <div className="testimonial-author">
                <strong>{item.name}</strong>
                <small>{item.role}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

