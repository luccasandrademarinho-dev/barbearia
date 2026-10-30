import React, { useState, useEffect } from 'react';
import { servicesData } from '../../../data/services';
import { barbersData } from '../../../data/barbers';
import Button from '../../common/Button/Button';
import './BookingModal.css';

export default function BookingModal({ isOpen, onClose, preselectedService, onSaveAppointment }) {
  const [formData, setFormData] = useState({
    serviceId: '',
    barberId: '',
    name: '',
    phone: '',
    date: '',
    time: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({
        ...prev,
        serviceId: preselectedService.id
      }));
    } else if (servicesData.length > 0 && !formData.serviceId) {
      setFormData(prev => ({
        ...prev,
        serviceId: servicesData[0].id
      }));
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const service = servicesData.find(s => s.id === formData.serviceId);
    const barber = barbersData.find(b => b.id === Number(formData.barberId));

    const newAppointment = {
      id: Date.now(),
      name: formData.name,
      phone: formData.phone,
      serviceName: service ? service.title : 'Serviço CLN',
      servicePrice: service ? service.price : 'R$ 65,00',
      barberName: barber ? barber.name : 'Qualquer Profissional',
      date: formData.date,
      time: formData.time,
      status: 'Confirmado',
      createdAt: new Date().toLocaleTimeString()
    };

    if (onSaveAppointment) {
      onSaveAppointment(newAppointment);
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const selectedService = servicesData.find(s => s.id === formData.serviceId);
  const selectedBarber = barbersData.find(b => b.id === Number(formData.barberId));

  const whatsappMessage = selectedService 
    ? encodeURIComponent(`Olá! Gostaria de confirmar meu agendamento na CLN cut:\n\n✂️ Serviço: ${selectedService.title}\n📅 Data: ${formData.date}\n⏰ Horário: ${formData.time}\n💈 Profissional: ${selectedBarber ? selectedBarber.name : 'Disponível'}\n👤 Cliente: ${formData.name}`)
    : '';

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Fechar">✕</button>

        {!submitted ? (
          <>
            <div className="modal-header">
              <span className="modal-badge">RITUAL EXCLUSIVO</span>
              <h2>Agendar Horário</h2>
              <p>Reserve seu horário com um de nossos mestres do corte.</p>
            </div>

            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-group">
                <label htmlFor="serviceId">Serviço</label>
                <select 
                  id="serviceId" 
                  name="serviceId" 
                  value={formData.serviceId} 
                  onChange={handleChange}
                  required
                >
                  {servicesData.map(service => (
                    <option key={service.id} value={service.id}>
                      {service.title} • {service.price} ({service.duration})
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="barberId">Profissional Especialista</label>
                <select 
                  id="barberId" 
                  name="barberId" 
                  value={formData.barberId} 
                  onChange={handleChange}
                >
                  <option value="">Qualquer profissional disponível</option>
                  {barbersData.map(barber => (
                    <option key={barber.id} value={barber.id}>
                      {barber.name} ({barber.role})
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Data</label>
                  <input 
                    type="date" 
                    id="date" 
                    name="date" 
                    value={formData.date} 
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="time">Horário</label>
                  <select 
                    id="time" 
                    name="time" 
                    value={formData.time} 
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecione...</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="13:30">13:30</option>
                    <option value="14:30">14:30</option>
                    <option value="15:30">15:30</option>
                    <option value="16:30">16:30</option>
                    <option value="17:30">17:30</option>
                    <option value="18:30">18:30</option>
                    <option value="19:30">19:30</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="name">Nome Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Seu nome"
                  value={formData.name} 
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">WhatsApp</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  placeholder="(11) 99999-9999"
                  value={formData.phone} 
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="modal-actions">
                <Button variant="secondary" onClick={onClose}>Cancelar</Button>
                <Button variant="primary" type="submit">Confirmar Agendamento</Button>
              </div>
            </form>
          </>
        ) : (
          <div className="booking-success">
            <div className="success-icon">✓</div>
            <h3>Agendamento Confirmado!</h3>
            <p>
              Perfeito, <strong>{formData.name}</strong>! Seu horário está registrado no sistema para o dia <strong>{formData.date}</strong> às <strong>{formData.time}</strong>.
            </p>
            <div className="success-actions">
              <a 
                href={`https://wa.me/5511999999999?text=${whatsappMessage}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary btn-md"
              >
                Abrir WhatsApp Oficial ↗
              </a>
              <Button variant="secondary" onClick={handleReset}>
                Fechar
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
