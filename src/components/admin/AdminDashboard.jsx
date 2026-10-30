import React, { useState } from 'react';
import Button from '../common/Button/Button';
import { barbersData } from '../../data/barbers';
import { servicesData } from '../../data/services';
import './AdminDashboard.css';

export default function AdminDashboard({ appointments, onUpdateStatus, onAddAppointment, onBackToSite }) {
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterBarber, setFilterBarber] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);

  // Formulário de novo agendamento manual (walk-in)
  const [newApp, setNewApp] = useState({
    name: '',
    phone: '',
    serviceId: servicesData[0].id,
    barberId: barbersData[0].id,
    date: new Date().toISOString().split('T')[0],
    time: '14:00',
    notes: 'Agendamento presencial'
  });

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const service = servicesData.find(s => s.id === newApp.serviceId);
    const barber = barbersData.find(b => b.id === Number(newApp.barberId));

    const created = {
      id: Date.now(),
      name: newApp.name,
      phone: newApp.phone,
      serviceName: service ? service.title : 'Serviço Personalizado',
      servicePrice: service ? service.price : 'R$ 60,00',
      barberName: barber ? barber.name : 'Qualquer profissional',
      date: newApp.date,
      time: newApp.time,
      status: 'Confirmado',
      createdAt: new Date().toLocaleString()
    };

    onAddAppointment(created);
    setShowAddModal(false);
    setNewApp({
      name: '',
      phone: '',
      serviceId: servicesData[0].id,
      barberId: barbersData[0].id,
      date: new Date().toISOString().split('T')[0],
      time: '14:00',
      notes: ''
    });
  };

  const filteredAppointments = appointments.filter(app => {
    const matchStatus = filterStatus === 'all' || app.status.toLowerCase() === filterStatus.toLowerCase();
    const matchBarber = filterBarber === 'all' || app.barberName.includes(filterBarber);
    return matchStatus && matchBarber;
  });

  // Métricas
  const totalBookings = appointments.length;
  const confirmedCount = appointments.filter(a => a.status === 'Confirmado').length;
  const completedCount = appointments.filter(a => a.status === 'Concluído').length;

  return (
    <div className="admin-container">
      {/* Topo do Painel */}
      <header className="admin-header glass-panel">
        <div className="admin-header-left">
          <div className="admin-badge">SISTEMA INTERNO</div>
          <h2>Painel de Gestão • CLN cut</h2>
          <p>Controle de agendamentos em tempo real, status de clientes e escala de barbeiros.</p>
        </div>

        <div className="admin-header-actions">
          <Button variant="primary" size="sm" onClick={() => setShowAddModal(true)}>
            + Novo Atendimento
          </Button>
          <Button variant="outline-pill" size="sm" onClick={onBackToSite}>
            🌐 Voltar ao Site
          </Button>
        </div>
      </header>

      {/* Cards de Métricas */}
      <div className="admin-metrics-grid">
        <div className="metric-card glass-panel">
          <span className="metric-label">Total Agendados</span>
          <span className="metric-value">{totalBookings}</span>
          <small className="metric-note">Hoje e futuros</small>
        </div>
        <div className="metric-card glass-panel">
          <span className="metric-label">Confirmados</span>
          <span className="metric-value text-green">{confirmedCount}</span>
          <small className="metric-note">Aguardando atendimento</small>
        </div>
        <div className="metric-card glass-panel">
          <span className="metric-label">Concluídos</span>
          <span className="metric-value text-blue">{completedCount}</span>
          <small className="metric-note">Finalizados com sucesso</small>
        </div>
        <div className="metric-card glass-panel">
          <span className="metric-label">Barbeiros Ativos</span>
          <span className="metric-value">{barbersData.length}</span>
          <small className="metric-note">Equipe em atendimento</small>
        </div>
      </div>

      {/* Barra de Filtros */}
      <div className="admin-controls glass-panel">
        <div className="control-group">
          <label>Status:</label>
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
            <option value="all">Todos os Status</option>
            <option value="Pendente">Pendentes</option>
            <option value="Confirmado">Confirmados</option>
            <option value="Concluído">Concluídos</option>
            <option value="Cancelado">Cancelados</option>
          </select>
        </div>

        <div className="control-group">
          <label>Barbeiro:</label>
          <select value={filterBarber} onChange={(e) => setFilterBarber(e.target.value)}>
            <option value="all">Todos os Barbeiros</option>
            {barbersData.map(b => (
              <option key={b.id} value={b.name}>{b.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Tabela de Agendamentos */}
      <div className="table-wrapper glass-panel">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Telefone</th>
              <th>Serviço</th>
              <th>Barbeiro</th>
              <th>Data & Hora</th>
              <th>Valor</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.length === 0 ? (
              <tr>
                <td colSpan="8" className="empty-cell">Nenhum agendamento encontrado com os filtros selecionados.</td>
              </tr>
            ) : (
              filteredAppointments.map(app => (
                <tr key={app.id}>
                  <td><strong>{app.name}</strong></td>
                  <td>{app.phone}</td>
                  <td>{app.serviceName}</td>
                  <td>{app.barberName}</td>
                  <td>
                    <span className="date-pill">{app.date} às {app.time}</span>
                  </td>
                  <td><strong>{app.servicePrice}</strong></td>
                  <td>
                    <span className={`status-pill status-${app.status.toLowerCase()}`}>
                      {app.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      {app.status !== 'Concluído' && (
                        <button 
                          className="btn-action check"
                          title="Marcar como Concluído"
                          onClick={() => onUpdateStatus(app.id, 'Concluído')}
                        >
                          ✓
                        </button>
                      )}
                      {app.status !== 'Confirmado' && app.status !== 'Concluído' && (
                        <button 
                          className="btn-action confirm"
                          title="Confirmar"
                          onClick={() => onUpdateStatus(app.id, 'Confirmado')}
                        >
                          👍
                        </button>
                      )}
                      {app.status !== 'Cancelado' && (
                        <button 
                          className="btn-action cancel"
                          title="Cancelar"
                          onClick={() => onUpdateStatus(app.id, 'Cancelado')}
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal de Agendamento Manual */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowAddModal(false)}>✕</button>
            <div className="modal-header">
              <h2>Novo Agendamento Presencial</h2>
              <p>Registre o cliente diretamente na agenda do sistema.</p>
            </div>

            <form onSubmit={handleAddSubmit} className="booking-form">
              <div className="form-group">
                <label>Nome do Cliente</label>
                <input 
                  type="text" 
                  required 
                  value={newApp.name} 
                  onChange={(e) => setNewApp({...newApp, name: e.target.value})}
                  placeholder="Ex: Matheus Oliveira"
                />
              </div>

              <div className="form-group">
                <label>Telefone / WhatsApp</label>
                <input 
                  type="text" 
                  required 
                  value={newApp.phone} 
                  onChange={(e) => setNewApp({...newApp, phone: e.target.value})}
                  placeholder="(11) 98765-4321"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Serviço</label>
                  <select 
                    value={newApp.serviceId} 
                    onChange={(e) => setNewApp({...newApp, serviceId: e.target.value})}
                  >
                    {servicesData.map(s => (
                      <option key={s.id} value={s.id}>{s.title} ({s.price})</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Barbeiro</label>
                  <select 
                    value={newApp.barberId} 
                    onChange={(e) => setNewApp({...newApp, barberId: e.target.value})}
                  >
                    {barbersData.map(b => (
                      <option key={b.id} value={b.id}>{b.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Data</label>
                  <input 
                    type="date" 
                    required 
                    value={newApp.date} 
                    onChange={(e) => setNewApp({...newApp, date: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Horário</label>
                  <input 
                    type="time" 
                    required 
                    value={newApp.time} 
                    onChange={(e) => setNewApp({...newApp, time: e.target.value})}
                  />
                </div>
              </div>

              <div className="modal-actions">
                <Button variant="secondary" onClick={() => setShowAddModal(false)}>Cancelar</Button>
                <Button variant="primary" type="submit">Salvar Agendamento</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

