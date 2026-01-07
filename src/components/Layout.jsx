import React, { useState } from 'react';
import { Calendar, RefreshCw, BarChart3 } from 'lucide-react';

const Layout = ({ children }) => {
    const [startDate, setStartDate] = useState('2025-01-01');
    const [endDate, setEndDate] = useState('2025-01-31');

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#0B1121' }}>
            {/* Hero Header */}
            <header style={{ background: 'linear-gradient(135deg, #0B1121 0%, #1F2937 100%)', padding: '40px 0 30px' }}>
                <div className="container">
                    <div className="flex-between" style={{ gap: '40px' }}>
                        {/* Left: Title & CTAs */}
                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                <span style={{ fontSize: '12px', color: '#8B5CF6', fontWeight: 600 }}>●</span>
                                <span style={{ fontSize: '12px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                    Système de monitoring en temps réel
                                </span>
                            </div>
                            <h1 style={{ fontSize: '36px', fontWeight: 700, color: '#F9FAFB', marginBottom: '12px' }}>
                                Gérez Hogust avec efficacité et clarté.
                            </h1>
                            <p style={{ color: '#9CA3AF', fontSize: '15px', marginBottom: '24px', maxWidth: '500px' }}>
                                Tableau de bord professionnel pour suivre la croissance, analyser les conversions et optimiser la rétention.
                            </p>
                            <div style={{ display: 'flex', gap: '12px' }}>
                                <button className="btn-gradient">
                                    <RefreshCw size={16} style={{ marginRight: '8px', display: 'inline' }} />
                                    Rafraîchir les données
                                </button>
                                <button className="btn-outline">
                                    <BarChart3 size={16} style={{ marginRight: '8px', display: 'inline' }} />
                                    Voir les analytics ↓
                                </button>
                            </div>
                        </div>

                        {/* Right: Status Card */}
                        <div className="status-card" style={{ minWidth: '280px' }}>
                            <div className="flex-between" style={{ marginBottom: '16px' }}>
                                <span style={{ fontSize: '13px', color: '#9CA3AF', fontWeight: 500 }}>Status API</span>
                                <span className="badge-online">Online</span>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                                <div>
                                    <div style={{ fontSize: '11px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Total</div>
                                    <div style={{ fontSize: '32px', fontWeight: 700, color: '#F9FAFB' }}>320</div>
                                    <div style={{ fontSize: '11px', color: '#6B7280' }}>Utilisateurs suivis</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '11px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Objectif</div>
                                    <div style={{ fontSize: '32px', fontWeight: 700, color: '#8B5CF6' }}>400</div>
                                    <div style={{ fontSize: '11px', color: '#6B7280' }}>Fin janvier</div>
                                </div>
                            </div>

                            <div>
                                <div style={{ fontSize: '11px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Charge Active</div>
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{ width: '80%' }}></div>
                                </div>
                                <div style={{ fontSize: '11px', color: '#6B7280', marginTop: '4px' }}>80% de l'objectif atteint</div>
                            </div>
                        </div>
                    </div>

                    {/* Date Filters */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '30px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                        <Calendar size={16} style={{ color: '#6B7280' }} />
                        <span style={{ color: '#6B7280', fontSize: '13px' }}>Période :</span>
                        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                        <span style={{ color: '#4B5563' }}>→</span>
                        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container" style={{ marginTop: '-10px' }}>
                {children}
            </main>
        </div>
    );
};

export default Layout;
