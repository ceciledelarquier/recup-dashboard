import React from 'react';

const StatsRow = () => {
    // KPIs Hogust
    const stats = [
        {
            label: "Croissance",
            value: "+85%",
            sublabel: "Obj. 100% / mois",
            color: '#10B981' // Vert
        },
        {
            label: "Utilisateurs Actifs",
            value: "320",
            sublabel: "Sur 400 (Obj.)",
            color: '#F9FAFB' // Blanc
        },
        {
            label: "Argent Récupéré",
            value: "87€",
            sublabel: "Par mois (Moy.)",
            color: '#F9FAFB'
        },
        {
            label: "Taux de Churn",
            value: "12%",
            sublabel: "Alerte (> 10%)",
            color: '#EF4444' // Rouge
        }
    ];

    return (
        <div className="stats-row">
            {stats.map((stat, idx) => (
                <div key={idx} className="card">
                    <div className="kpi-label">{stat.label}</div>
                    <div className="kpi-value" style={{ color: stat.color }}>{stat.value}</div>
                    <div style={{ fontSize: '12px', color: '#6B7280', marginTop: '4px' }}>{stat.sublabel}</div>
                </div>
            ))}
        </div>
    );
};

export default StatsRow;
