import React, { useState } from 'react';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import './Work.css';

export default function Work({ onSelectCutForBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const cuts = [
    {
      id: 1,
      title: 'Degradê Mid Fade com Textura',
      category: 'fade',
      image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=700&q=80',
      barber: 'Marcos Silva',
      time: '40 min'
    },
    {
      id: 2,
      title: 'Pompadour Executivo Clássico',
      category: 'classic',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=700&q=80',
      barber: 'Lucas Ferreira',
      time: '45 min'
    },
    {
      id: 3,
      title: 'Barba Esculpida & Taper Fade',
      category: 'beard',
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=700&q=80',
      barber: 'Rafael Costa',
      time: '35 min'
    },
    {
      id: 4,
      title: 'Low Taper Fade Natural',
      category: 'fade',
      image: 'https://images.unsplash.com/photo-1517832606589-7629c33971f6?auto=format&fit=crop&w=700&q=80',
      barber: 'Marcos Silva',
      time: '40 min'
    },
    {
      id: 5,
      title: 'Penteado Clássico na Tesoura',
      category: 'classic',
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=700&q=80',
      barber: 'Lucas Ferreira',
      time: '50 min'
    },
    {
      id: 6,
      title: 'Barba Completa com Barboterapia',
      category: 'beard',
      image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=700&q=80',
      barber: 'Rafael Costa',
      time: '35 min'
    }
  ];

  const filteredCuts = activeCategory === 'all' 
    ? cuts 
    : cuts.filter(cut => cut.category === activeCategory);

  return (
    <section id="work" className="section work-section">
      <div className="container">
        <SectionTitle
          subtitle="Portfólio & Estilos"
          title="Trabalhos Recentes"
          description="Explore nossa galeria de resultados reais com cortes milimétricos e acabamento de alto padrão."
        />

        {/* Filtros de Categoria */}
        <div className="work-filters">
          <button 
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            Todos os Cortes
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'fade' ? 'active' : ''}`}
            onClick={() => setActiveCategory('fade')}
          >
            Fades & Degradês
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'classic' ? 'active' : ''}`}
            onClick={() => setActiveCategory('classic')}
          >
            Clássicos na Tesoura
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'beard' ? 'active' : ''}`}
            onClick={() => setActiveCategory('beard')}
          >
            Barbas & Alinhamentos
          </button>
        </div>

        {/* Grid de Trabalhos */}
        <div className="work-grid">
          {filteredCuts.map((cut) => (
            <div key={cut.id} className="work-card">
              <div className="work-img-wrapper">
                <img src={cut.image} alt={cut.title} loading="lazy" />
                <div className="work-overlay">
                  <span className="work-barber">Por {cut.barber}</span>
                  <h4 className="work-title">{cut.title}</h4>
                  <span className="work-time">⏱ {cut.time}</span>
                  <button 
                    className="work-book-btn"
                    onClick={() => onSelectCutForBooking(cut)}
                  >
                    Quero este estilo ↗
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
