import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar/Navbar';
import Hero from './components/sections/Hero/Hero';
import Services from './components/sections/Services/Services';
import Skills from './components/sections/Skills/Skills';
import Work from './components/sections/Work/Work';
import About from './components/sections/About/About';
import Testimonials from './components/sections/Testimonials/Testimonials';
import Contact from './components/sections/Contact/Contact';
import Footer from './components/layout/Footer/Footer';
import BookingModal from './components/sections/BookingModal/BookingModal';
import AdminDashboard from './components/admin/AdminDashboard';
import './App.css';

const INITIAL_APPOINTMENTS = [
  {
    id: 101,
    name: 'Carlos Drummond',
    phone: '(11) 98765-4321',
    serviceName: 'Combo Executivo CLN (Cabelo + Barba)',
    servicePrice: 'R$ 110,00',
    barberName: 'Marcos "Navalha" Silva',
    date: new Date().toISOString().split('T')[0],
    time: '14:30',
    status: 'Confirmado',
    createdAt: '10:15'
  },
  {
    id: 102,
    name: 'Guilherme Siqueira',
    phone: '(11) 91234-5678',
    serviceName: 'Degradê Skin Fade & Taper',
    servicePrice: 'R$ 70,00',
    barberName: 'Lucas Ferreira',
    date: new Date().toISOString().split('T')[0],
    time: '15:30',
    status: 'Confirmado',
    createdAt: '11:00'
  },
  {
    id: 103,
    name: 'Felipe Santana',
    phone: '(11) 97777-8888',
    serviceName: 'Barboterapia com Toalha Quente',
    servicePrice: 'R$ 55,00',
    barberName: 'Rafael Costa',
    date: new Date().toISOString().split('T')[0],
    time: '11:00',
    status: 'Concluído',
    createdAt: '08:45'
  }
];

export default function App() {
  const [view, setView] = useState('client'); // 'client' | 'admin'
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Carrega agendamentos do localStorage ou usa dados iniciais
  const [appointments, setAppointments] = useState(() => {
    try {
      const saved = localStorage.getItem('cln_cut_appointments');
      return saved ? JSON.parse(saved) : INITIAL_APPOINTMENTS;
    } catch {
      return INITIAL_APPOINTMENTS;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('cln_cut_appointments', JSON.stringify(appointments));
    } catch (e) {
      console.error('Erro ao salvar no localStorage', e);
    }
  }, [appointments]);

  const handleOpenBooking = () => {
    setSelectedService(null);
    setIsBookingOpen(true);
  };

  const handleSelectService = (service) => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  const handleSelectCutForBooking = (cut) => {
    setSelectedService({
      id: 'custom-' + cut.id,
      title: cut.title,
      price: 'R$ 70,00',
      duration: cut.time
    });
    setIsBookingOpen(true);
  };

  const handleSaveAppointment = (newAppointment) => {
    setAppointments(prev => [newAppointment, ...prev]);
  };

  const handleUpdateStatus = (id, newStatus) => {
    setAppointments(prev =>
      prev.map(app => app.id === id ? { ...app, status: newStatus } : app)
    );
  };

  const toggleView = () => {
    setView(prev => (prev === 'client' ? 'admin' : 'client'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      {/* Barra de Navegação */}
      <Navbar 
        onOpenBooking={handleOpenBooking} 
        currentView={view}
        onToggleView={toggleView}
      />

      {/* Alternância de Visão: Site do Cliente vs Painel Admin */}
      {view === 'client' ? (
        <main>
          {/* Seção Hero baseada fielmente na referência */}
          <Hero onOpenBooking={handleOpenBooking} />

          {/* Seção de Serviços Exclusivos */}
          <Services onSelectService={handleSelectService} />

          {/* Seção de Habilidades dos Barbeiros (SKILLS) */}
          <Skills />

          {/* Portfólio de Cortes Recentes */}
          <Work onSelectCutForBooking={handleSelectCutForBooking} />

          {/* Sobre a CLN cut */}
          <About onOpenBooking={handleOpenBooking} />

          {/* Avaliações e Depoimentos */}
          <Testimonials />

          {/* Localização & Contato */}
          <Contact onOpenBooking={handleOpenBooking} />
        </main>
      ) : (
        <main>
          <AdminDashboard 
            appointments={appointments}
            onUpdateStatus={handleUpdateStatus}
            onAddAppointment={handleSaveAppointment}
            onBackToSite={() => setView('client')}
          />
        </main>
      )}

      {/* Rodapé */}
      <Footer onToggleView={toggleView} />

      {/* Modal de Agendamento */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        preselectedService={selectedService}
        onSaveAppointment={handleSaveAppointment}
      />

      {/* Botão Flutuante de WhatsApp */}
      <a 
        href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20agendamento%20na%20CLN%20cut." 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <span>💬</span>
      </a>

      {/* Botão Rápido Flutuante para Alternar para o Sistema */}
      <button 
        className="floating-system-toggle"
        onClick={toggleView}
        title={view === 'client' ? 'Abrir Painel de Gestão' : 'Voltar ao Site'}
      >
        {view === 'client' ? '⚙️ Painel do Sistema' : '🌐 Ver Site Oficial'}
      </button>
    </div>
  );
}
