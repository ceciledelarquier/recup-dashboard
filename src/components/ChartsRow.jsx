import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, LineChart, Line, Tooltip } from 'recharts';

const ChartsRow = () => {
    // Donut: Répartition des Bugs Hogust
    const bugData = [
        { name: 'Critique', value: 2, color: '#EF4444' }, // Rouge
        { name: 'Moyen', value: 6, color: '#F59E0B' },   // Orange
        { name: 'Faible', value: 1, color: '#10B981' }   // Vert
    ];

    // Bar: Funnel Conversion Argent Hogust
    const funnelData = [
        { step: 'Actifs', users: 100 },
        { step: 'Détection', users: 75 },
        { step: 'Réclamation', users: 50 },
        { step: 'Remboursés', users: 30 }
    ];

    // Line: Croissance Utilisateurs (6 mois) Hogust
    const growthData = [
        { month: 'Août', real: 60, target: 100 },
        { month: 'Sept', real: 70, target: 102 },
        { month: 'Oct', real: 75, target: 104 },
        { month: 'Nov', real: 80, target: 106 },
        { month: 'Déc', real: 82, target: 108 },
        { month: 'Jan', real: 85, target: 110 }
    ];

    return (
        <div className="grid-2">
            {/* Left: Donut Bugs + Bar Funnel */}
            <div className="card">
                <h2 style={{ color: '#F9FAFB', marginBottom: '20px' }}>Santé & Conversion</h2>
                <div style={{ display: 'flex', gap: '20px' }}>

                    {/* Donut Bugs */}
                    <div style={{ width: '40%', height: '220px' }}>
                        <div style={{ fontSize: '11px', color: '#6B7280', marginBottom: '8px', textAlign: 'center' }}>Répartition Bugs</div>
                        <ResponsiveContainer width="100%" height="90%">
                            <PieChart>
                                <Pie
                                    data={bugData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={50}
                                    outerRadius={70}
                                    dataKey="value"
                                    stroke="none"
                                >
                                    {bugData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', fontSize: '10px' }}>
                            {bugData.map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: item.color }}></span>
                                    <span style={{ color: '#9CA3AF' }}>{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bar Funnel */}
                    <div style={{ width: '60%', height: '220px' }}>
                        <div style={{ fontSize: '11px', color: '#6B7280', marginBottom: '8px', textAlign: 'right' }}>Funnel Conversion</div>
                        <ResponsiveContainer width="100%" height="90%">
                            <BarChart data={funnelData} layout="vertical">
                                <XAxis type="number" hide />
                                <YAxis dataKey="step" type="category" width={70} tick={{ fill: '#6B7280', fontSize: 10 }} axisLine={false} tickLine={false} />
                                <Bar dataKey="users" fill="#8B5CF6" radius={[0, 4, 4, 0]} barSize={20} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Right: Growth Chart */}
            <div className="card">
                <div className="flex-between" style={{ marginBottom: '20px' }}>
                    <h2 style={{ color: '#F9FAFB', margin: 0 }}>Croissance Utilisateurs</h2>
                    <span style={{ fontSize: '11px', color: '#6B7280' }}>6 derniers mois</span>
                </div>
                <div style={{ height: '220px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={growthData}>
                            <XAxis
                                dataKey="month"
                                tick={{ fill: '#6B7280', fontSize: 11 }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <YAxis tick={{ fill: '#6B7280', fontSize: 11 }} axisLine={false} tickLine={false} />
                            <Tooltip
                                contentStyle={{ background: '#1F2937', border: '1px solid #374151', borderRadius: '8px', color: '#F9FAFB' }}
                            />
                            <Line
                                type="monotone"
                                dataKey="real"
                                stroke="#10B981"
                                strokeWidth={3}
                                dot={{ fill: '#10B981', strokeWidth: 0, r: 4 }}
                                name="Réel"
                            />
                            <Line
                                type="monotone"
                                dataKey="target"
                                stroke="#6B7280"
                                strokeWidth={2}
                                strokeDasharray="5 5"
                                dot={false}
                                name="Objectif"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '12px', fontSize: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ width: '12px', height: '3px', background: '#10B981', borderRadius: '2px' }}></span>
                        <span style={{ color: '#9CA3AF' }}>Réel</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ width: '12px', height: '3px', background: '#6B7280', borderRadius: '2px' }}></span>
                        <span style={{ color: '#9CA3AF' }}>Objectif</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChartsRow;
