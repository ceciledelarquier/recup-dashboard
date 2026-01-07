import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const GrowthCard = () => {
    const data = {
        labels: ['Août', 'Sept', 'Oct', 'Nov', 'Déc', 'Jan'],
        datasets: [
            {
                label: 'Objectif',
                data: [100, 100, 100, 100, 100, 100],
                borderColor: '#9CA3AF',
                borderWidth: 2,
                borderDash: [5, 5],
                pointRadius: 0,
                tension: 0
            },
            {
                label: 'Croissance',
                data: [60, 70, 75, 80, 82, 85],
                borderColor: '#1E3A8A',
                backgroundColor: 'rgba(30, 58, 138, 0.1)',
                borderWidth: 3,
                pointRadius: 4,
                pointBackgroundColor: '#1E3A8A',
                tension: 0.3,
                fill: true
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                mode: 'index',
                intersect: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 110,
                ticks: {
                    callback: (value) => value + '%'
                },
                grid: {
                    color: '#F3F4F6'
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    };

    return (
        <div className="card" style={{ height: '400px' }}>
            <div className="flex justify-between items-start mb-4">
                <div>
                    <div className="text-secondary text-sm font-bold mb-2 uppercase tracking-wide">
                        Croissance Utilisateurs
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="text-5xl font-bold text-blue-900">+85%</div>
                        <span className="text-lg text-secondary">/mois</span>
                        <div className="flex items-center gap-1 bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
                            <span className="text-2xl">🟠</span>
                            <span className="text-sm font-bold">85% vs N-1</span>
                        </div>
                    </div>
                    <div className="text-xs text-secondary mt-2">
                        Objectif : <span className="font-bold">100%</span>
                    </div>
                </div>
            </div>

            <div className="h-64 mt-4">
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default GrowthCard;
