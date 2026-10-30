import React from 'react';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import { barbersData } from '../../../data/barbers';
import './Team.css';

export default function Team() {
  return (
    <section id="team" className="section team-section">
      <div className="container">
        <SectionTitle 
          subtitle="Nossos Mestres" 
          title="Profissionais Especialistas" 
          description="Nossa equipe é formada por barbeiros premiados, dedicados a transformar seu visual com técnica de excelência."
        />

        <div className="team-grid">
          {barbersData.map((barber) => (
            <div key={barber.id} className="team-card">
              <div className="team-img-wrapper">
                <img src={barber.image} alt={barber.name} />
              </div>
              <div className="team-info">
                <h3 className="team-name">{barber.name}</h3>
                <span className="team-role">{barber.role}</span>
                <span className="team-exp">{barber.experience}</span>

                <div className="team-specialties">
                  {barber.specialties.map((spec, index) => (
                    <span key={index} className="spec-tag">{spec}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

