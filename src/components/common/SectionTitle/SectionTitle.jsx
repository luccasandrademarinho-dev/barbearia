import React from 'react';
import './SectionTitle.css';

export default function SectionTitle({ subtitle, title, description, center = true }) {
  return (
    <div className={`section-header ${center ? 'center' : ''}`}>
      {subtitle && <span className="section-subtitle">{subtitle}</span>}
      <h2 className="section-title">{title}</h2>
      <div className="section-accent-line"></div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
