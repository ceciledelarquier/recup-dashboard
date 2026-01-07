import React from 'react';
import { AlertTriangle } from 'lucide-react';

const FunnelChart = () => {
    const steps = [
        {
            label: "Utilisateurs Actifs",
            value: 100,
            percentage: null,
            color: 'bg-blue-600',
            textColor: 'text-white'
        },
        {
            label: "Ont détecté des écarts",
            value: 75,
            percentage: "75%",
            color: 'bg-green-400',
            textColor: 'text-white'
        },
        {
            label: "Ont réclamé l'argent",
            value: 50,
            percentage: "67%",
            color: 'bg-orange-500',
            textColor: 'text-white',
            alert: "⚠️ -25 perdus"
        },
        {
            label: "Ont été remboursés",
            value: 30,
            percentage: "60%",
            color: 'bg-green-600',
            textColor: 'text-white'
        }
    ];

    return (
        <div className="card">
            <h3 className="mb-6 text-secondary uppercase tracking-wide text-xs font-bold">
                Funnel Conversion Argent
            </h3>

            {/* Funnel bars */}
            <div className="space-y-3 mb-6">
                {steps.map((step, idx) => (
                    <div key={idx} className="relative">
                        {/* Bar */}
                        <div
                            className={`${step.color} h-14 rounded-lg flex items-center justify-between px-4 transition-all duration-500 shadow-sm`}
                            style={{ width: `${step.value}%` }}
                        >
                            <span className={`${step.textColor} font-medium text-sm`}>
                                {step.label}
                            </span>
                            <div className="flex items-center gap-3">
                                <span className={`${step.textColor} font-bold text-lg`}>
                                    {step.value}
                                </span>
                                {step.percentage && (
                                    <span className={`${step.textColor} text-xs bg-black/20 px-2 py-1 rounded-full font-bold`}>
                                        {step.percentage}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Alert indicator */}
                        {step.alert && (
                            <div className="absolute -right-2 top-1/2 -translate-y-1/2 translate-x-full ml-3 hidden md:block">
                                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                                    {step.alert}
                                </span>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Goulot identification (read-only) */}
            <div className="p-4 bg-orange-50 border-l-4 border-orange-500 rounded-r-lg">
                <div className="font-bold text-orange-800 text-sm mb-2">
                    🎯 Goulot identifié
                </div>
                <p className="text-orange-700 text-sm mb-2">
                    Conversion Détection → Réclamation à <strong>67%</strong> : 25 utilisateurs perdus.
                </p>
                <p className="text-orange-600 text-xs italic">
                    → Automatiser génération courriers
                </p>
            </div>
        </div>
    );
};

export default FunnelChart;
