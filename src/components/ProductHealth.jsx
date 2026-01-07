import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Line } from 'react-chartjs-2';

const ProductHealth = () => {
    const metrics = [
        {
            name: "Connexions/semaine",
            value: "1,8",
            target: "2",
            status: "danger",
            action: "Retravailler emails réactivation",
            sparklineData: [1.5, 1.6, 1.7, 1.9, 1.8, 1.8],
            chartType: 'line'
        },
        {
            name: "Taux de Churn",
            value: "12%",
            target: "<10%",
            status: "danger",
            action: "Analyse exit interviews",
            sparklineData: [8, 9, 10, 11, 11, 12],
            chartType: 'line'
        },
        {
            name: "Bugs signalés",
            value: "8",
            target: "<5",
            status: "danger",
            action: "Sprint correctif urgent",
            barData: { critical: 2, medium: 6 },
            chartType: 'bar'
        }
    ];

    const getSparklineOptions = () => ({
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
        },
        scales: {
            x: { display: false },
            y: { display: false }
        },
        elements: {
            point: { radius: 0 }
        }
    });

    const createSparklineData = (data) => ({
        labels: Array(data.length).fill(''),
        datasets: [{
            data,
            borderColor: '#EF4444',
            borderWidth: 2,
            tension: 0.3,
            fill: false
        }]
    });

    return (
        <div className="card">
            <Disclosure defaultOpen={false}>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="w-full flex items-center justify-between text-left hover:bg-gray-50 -m-5 p-5 rounded-lg transition-colors">
                            <div className="flex items-center gap-3">
                                <span className="text-lg">{open ? '▼' : '▶'}</span>
                                <h3 className="text-secondary uppercase tracking-wide text-xs font-bold">
                                    Santé Produit (3 métriques)
                                </h3>
                            </div>
                            <span className="text-xs text-gray-400">
                                {open ? 'Replier ▲' : 'Déplier ▼'}
                            </span>
                        </Disclosure.Button>

                        <Disclosure.Panel className="mt-4 space-y-4">
                            {metrics.map((m, idx) => (
                                <div key={idx} className="flex gap-4 items-start border-b pb-4 last:border-0 last:pb-0">
                                    {/* Left: Metric Info */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-medium text-sm">{m.name}</span>
                                            <span className="font-bold text-danger text-sm">
                                                {m.value} <span className="text-secondary font-normal text-xs">vs {m.target}</span>
                                            </span>
                                        </div>

                                        {/* Action suggestion with colored tag */}
                                        <div className="text-xs bg-red-50 text-red-700 px-3 py-2 rounded-lg flex items-center gap-2">
                                            <span className="text-base">{m.status === 'danger' ? '🔴' : '🟠'}</span>
                                            <span>→ {m.action}</span>
                                        </div>
                                    </div>

                                    {/* Right: Mini Chart */}
                                    <div className="flex-shrink-0" style={{ width: '140px' }}>
                                        {m.chartType === 'line' && (
                                            <div style={{ height: '60px', width: '140px' }}>
                                                <Line
                                                    data={createSparklineData(m.sparklineData)}
                                                    options={getSparklineOptions()}
                                                />
                                            </div>
                                        )}

                                        {m.chartType === 'bar' && (
                                            <div className="space-y-2" style={{ width: '140px' }}>
                                                <div className="flex items-center gap-2">
                                                    <div
                                                        className="bg-red-500 h-5 rounded transition-all"
                                                        style={{ width: `${(m.barData.critical / 8) * 100}%` }}
                                                    ></div>
                                                    <span className="text-xs text-red-700 font-bold whitespace-nowrap">{m.barData.critical} 🔴</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div
                                                        className="bg-orange-500 h-5 rounded transition-all"
                                                        style={{ width: `${(m.barData.medium / 8) * 100}%` }}
                                                    ></div>
                                                    <span className="text-xs text-orange-700 font-bold whitespace-nowrap">{m.barData.medium} 🟠</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    );
};

export default ProductHealth;
