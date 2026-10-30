import React from 'react';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import './Skills.css';

export default function Skills() {
  const skillsList = [
    {
      id: 'fade',
      title: 'Domínio do Fade & Taper',
      subtitle: 'Degradê Cirúrgico',
      level: 99,
      icon: '⚡',
      description: 'Transições milimétricas sem marcas visíveis, harmonizadas com a densidade capilar e formato do crânio.',
      tags: ['Mid Fade', 'Low Fade', 'Taper Fade', 'Corte Militar']
    },
    {
      id: 'scissor',
      title: 'Arquitetura na Tesoura',
      subtitle: 'Geometria & Texturização',
      level: 96,
      icon: '✂️',
      description: 'Corte estruturado à mão livre com tesouras japonesas de fio navalha para caimento natural e movimento.',
      tags: ['Texturização', 'Camadas', 'French Crop', 'Pompadour Clássico']
    },
    {
      id: 'razor',
      title: 'Navalha Tradicional & Contorno',
      subtitle: 'Precisão Cirúrgica',
      level: 98,
      icon: '🪒',
      description: 'Linhas perfeitamente delineadas com navalhete descartável e técnica de deslizamento suave sem irritação.',
      tags: ['Pezinho Fino', 'Alinhamento Simétrico', 'Design de Barba', 'Navalhado']
    },
    {
      id: 'therapy',
      title: 'Spa de Barba & Toalha Quente',
      subtitle: 'Barboterapia Relaxante',
      level: 95,
      icon: '♨️',
      description: 'Toalhas aquecidas com óleos essenciais, massagem facial descompressiva e hidratação profunda.',
      tags: ['Hidratação Profunda', 'Ozonioterapia', 'Massagem Facial', 'Balm Premium']
    },
    {
      id: 'visagism',
      title: 'Visagismo Facial Masculino',
      subtitle: 'Consultoria Personalizada',
      level: 94,
      icon: '👁️',
      description: 'Análise morfológica dos traços do rosto para valorizar pontos fortes de autoridade, estilo e elegância.',
      tags: ['Formato de Rosto', 'Linha de Mandíbula', 'Equilíbrio Óptico', 'Estilo Pessoal']
    },
    {
      id: 'treatment',
      title: 'Saúde Capilar & Couro Cabeludo',
      subtitle: 'Terapia Capilar & Selagem',
      level: 92,
      icon: '🧪',
      description: 'Tratamentos de purificação do couro cabeludo, controle de oleosidade e alinhamento dos fios.',
      tags: ['Detox Capilar', 'Selagem Orgânica', 'Controle Anticaspa', 'Brilho e Força']
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <SectionTitle
          subtitle="Técnica & Habilidades"
          title="Habilidades dos Mestres"
          description="A excelência do corte reside no domínio absoluto das técnicas clássicas e das inovações de alta precisão."
        />

        <div className="skills-grid">
          {skillsList.map((skill) => (
            <div key={skill.id} className="skill-card glass-panel">
              <div className="skill-card-top">
                <span className="skill-icon-bubble">{skill.icon}</span>
                <div className="skill-level-badge">
                  <span>{skill.level}%</span>
                  <small>Precisão</small>
                </div>
              </div>

              <div className="skill-card-content">
                <span className="skill-subtitle">{skill.subtitle}</span>
                <h3 className="skill-title">{skill.title}</h3>
                <p className="skill-desc">{skill.description}</p>
              </div>

              {/* Barra de Progresso / Medidor de Habilidade */}
              <div className="skill-progress-bar">
                <div 
                  className="skill-progress-fill" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              <div className="skill-tags">
                {skill.tags.map((tag, idx) => (
                  <span key={idx} className="skill-tag-pill">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Banner de Certificação de Habilidades */}
        <div className="skills-footer-banner glass-panel">
          <div className="banner-icon">🏆</div>
          <div className="banner-text">
            <h4>Padrão de Excelência Certificado</h4>
            <p>Nossos barbeiros passam por mais de 500 horas anuais de aprimoramento contínuo nas melhores academias internacionais.</p>
          </div>
          <a href="#services" className="banner-link">Ver Cardápio de Serviços ↗</a>
        </div>
      </div>
    </section>
  );
}
