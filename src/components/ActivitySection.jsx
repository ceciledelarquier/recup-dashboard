import React, { useState } from 'react';
import { Plus, Sparkles } from 'lucide-react';

const ActivitySection = () => {
    // Activités Contextuelles Hogust
    const [activities] = useState([
        { title: "Bug critique", desc: "Plantage upload facture", status: "En cours", priority: "HAUTE", type: "danger" },
        { title: "Externe", desc: "Salon pro boulangerie", status: "+120 sub", priority: "MOYENNE", type: "warning" },
        { title: "Feature request", desc: "Export PDF réclamations", status: "Backlog", priority: "BASSE", type: "info" }
    ]);

    const [newTask, setNewTask] = useState("");

    const handleAdd = (e) => {
        e.preventDefault();
        if (!newTask) return;
        // Logic to add task would go here
        setNewTask("");
    };

    return (
        <div className="grid-2">
            {/* Left: Activity Feed */}
            <div className="card">
                <div className="flex-between" style={{ marginBottom: '20px' }}>
                    <h2 style={{ color: '#F9FAFB', margin: 0 }}>Flux d'activité</h2>
                    <span style={{ fontSize: '12px', color: '#6B7280' }}>Derniers événements</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {activities.map((item, idx) => (
                        <div key={idx} style={{
                            background: '#111827',
                            borderRadius: '12px',
                            padding: '16px',
                            border: '1px solid #374151',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <div>
                                <div style={{ fontWeight: 600, color: '#F9FAFB', fontSize: '14px', marginBottom: '4px' }}>{item.title}</div>
                                <div style={{ fontSize: '12px', color: '#9CA3AF' }}>{item.desc}</div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{
                                    fontSize: '11px',
                                    fontWeight: 600,
                                    color: item.type === 'danger' ? '#EF4444' : item.type === 'warning' ? '#F59E0B' : '#6B7280',
                                    marginBottom: '4px'
                                }}>
                                    {item.status}
                                </div>
                                <div style={{ fontSize: '10px', color: '#4B5563', textTransform: 'uppercase' }}>
                                    {item.priority}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right: AI Insights + Add Event */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* AI Insights - Contenu Hogust */}
                <div className="card" style={{ borderLeft: '3px solid #8B5CF6' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                        <Sparkles size={18} style={{ color: '#8B5CF6' }} />
                        <h2 style={{ color: '#F9FAFB', margin: 0 }}>Synthèse IA (Janvier)</h2>
                    </div>

                    <div style={{ fontSize: '13px', lineHeight: 1.7 }}>
                        <div style={{ marginBottom: '12px' }}>
                            <span style={{ color: '#10B981', fontWeight: 600 }}>✅ Points forts :</span>
                            <ul style={{ color: '#9CA3AF', marginTop: '4px', paddingLeft: '20px' }}>
                                <li>Croissance solide (+85%)</li>
                                <li>Rétention M+1 en hausse (+5 pts)</li>
                            </ul>
                        </div>

                        <div style={{ marginBottom: '12px' }}>
                            <span style={{ color: '#EF4444', fontWeight: 600 }}>🔴 Alertes :</span>
                            <ul style={{ color: '#9CA3AF', marginTop: '4px', paddingLeft: '20px' }}>
                                <li>Churn à 12% (&gt;10%) - Relancer inactifs</li>
                                <li>Conversion détection faible (67%)</li>
                            </ul>
                        </div>

                        <div style={{
                            background: 'rgba(139, 92, 246, 0.1)',
                            border: '1px solid rgba(139, 92, 246, 0.3)',
                            borderRadius: '8px',
                            padding: '12px'
                        }}>
                            <span style={{ color: '#A78BFA', fontWeight: 600, fontSize: '12px' }}>🎯 Priorités Février :</span>
                            <ol style={{ color: '#D1D5DB', marginTop: '4px', paddingLeft: '20px', fontSize: '12px' }}>
                                <li>Sprint correctif bugs (8 signalés)</li>
                                <li>A/B test nouveau CTA réclamation</li>
                            </ol>
                        </div>
                    </div>
                </div>

                {/* Add Event Form */}
                <div className="card">
                    <h2 style={{ color: '#F9FAFB', marginBottom: '16px' }}>Ajouter un événement</h2>
                    <form onSubmit={handleAdd}>
                        <div style={{ marginBottom: '12px' }}>
                            <label style={{ display: 'block', fontSize: '11px', color: '#6B7280', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Titre</label>
                            <input
                                type="text"
                                placeholder="Ex: Salon Boulangerie..."
                                value={newTask}
                                onChange={(e) => setNewTask(e.target.value)}
                                style={{ width: '100%', background: '#111827', border: '1px solid #374151', borderRadius: '8px', padding: '12px', color: '#F9FAFB', fontSize: '14px' }}
                            />
                        </div>
                        <button type="submit" className="btn-gradient" style={{ width: '100%', marginTop: '8px' }}>
                            <Plus size={16} style={{ marginRight: '8px', display: 'inline' }} />
                            Ajouter
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ActivitySection;
