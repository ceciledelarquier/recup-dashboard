import React, { useState } from 'react';
import { Send, Sparkles, ChevronDown, ChevronUp, Plus } from 'lucide-react';
import { Disclosure } from '@headlessui/react';

const InsightsPanel = () => {
    const [insights, setInsights] = useState([
        { date: "02/01", category: "Bug", desc: "Plantage upload facture", impact: "-40% sub", type: "danger" },
        { date: "15/01", category: "Externe", desc: "Salon pro boulangerie", impact: "+120 sub", type: "warning" }
    ]);
    const [newInsight, setNewInsight] = useState("");

    const handleAdd = (e) => {
        e.preventDefault();
        if (!newInsight) return;
        setInsights([{ date: "Today", category: "Manuel", desc: newInsight, type: "neutral" }, ...insights]);
        setNewInsight("");
    };

    return (
        <div className="flex flex-col gap-4">
            {/* Zone 1: Recommandations IA (AVANT les insights - Plus important) */}
            <div className="card card-status-success relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-5 pointer-events-none">
                    <Sparkles size={80} />
                </div>
                <h3 className="flex items-center gap-2 text-sm font-bold mb-3" style={{ color: '#1E3A8A' }}>
                    <Sparkles size={16} />
                    Synthèse IA (Janvier)
                </h3>

                <div className="space-y-3 text-sm">
                    <div>
                        <div className="font-bold text-success text-xs mb-1">✅ Points forts</div>
                        <ul className="list-disc pl-4 text-gray-600 text-xs space-y-0.5">
                            <li>Croissance solide (+85%) malgré bug du 02/01</li>
                            <li>Rétention M+1 en hausse (+5 pts)</li>
                        </ul>
                    </div>

                    <div>
                        <div className="font-bold text-danger text-xs mb-1">🔴 Alertes</div>
                        <ul className="list-disc pl-4 text-gray-600 text-xs space-y-0.5">
                            <li>Churn à 12% (&gt;10%)</li>
                            <li>Conversion détection faible (67%)</li>
                        </ul>
                    </div>

                    <div className="bg-blue-50 p-2 rounded-lg border border-blue-100">
                        <div className="font-bold text-xs mb-1" style={{ color: '#1E3A8A' }}>🎯 Priorités Février</div>
                        <ol className="list-decimal pl-4 text-xs font-medium" style={{ color: '#1E3A8A' }}>
                            <li>Sprint correctif bugs (8 signalés)</li>
                            <li>A/B test nouveau CTA réclamation</li>
                        </ol>
                    </div>
                </div>
            </div>

            {/* Zone 2: Insights Contextuels (Accordéon fermé par défaut) */}
            <div className="card">
                <Disclosure defaultOpen={false}>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="w-full flex items-center justify-between text-left hover:bg-gray-50 -m-4 p-4 rounded-lg transition-colors">
                                <h3 className="text-secondary uppercase tracking-wide text-xs font-bold m-0">
                                    Insights Contextuels ({insights.length})
                                </h3>
                                <span className="flex items-center gap-1 text-xs text-gray-400">
                                    {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                                    {open ? 'Replier' : 'Déplier'}
                                </span>
                            </Disclosure.Button>

                            <Disclosure.Panel className="mt-4">
                                {/* Formulaire d'ajout compact */}
                                <form onSubmit={handleAdd} className="flex gap-2 mb-3">
                                    <input
                                        type="text"
                                        placeholder="Nouvel événement..."
                                        className="flex-1 border border-gray-200 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={newInsight}
                                        onChange={(e) => setNewInsight(e.target.value)}
                                    />
                                    <button type="submit" className="text-white px-3 py-1.5 rounded-lg hover:opacity-90 flex items-center gap-1 text-xs font-medium" style={{ backgroundColor: '#1E3A8A' }}>
                                        <Plus size={14} />
                                        Ajouter
                                    </button>
                                </form>

                                <div className="space-y-2">
                                    {insights.map((item, idx) => (
                                        <div key={idx} className="flex gap-2 text-xs items-start p-2 rounded-lg hover:bg-gray-50">
                                            <span className={`font-mono py-0.5 px-1.5 rounded ${item.type === 'danger' ? 'bg-red-100 text-red-700' : item.type === 'warning' ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-600'}`}>
                                                {item.date}
                                            </span>
                                            <div className="flex-1">
                                                <div className="font-medium text-gray-900">{item.desc}</div>
                                                {item.impact && <div className="text-gray-500 mt-0.5">{item.impact}</div>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    );
};

export default InsightsPanel;
