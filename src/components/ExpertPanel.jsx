import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AccordionItem = ({ title, children, isOpen, onClick }) => (
    <div className="border border-gray-200 rounded-lg mb-2 overflow-hidden bg-white">
        <button
            className="w-full px-4 py-3 text-left font-medium flex justify-between items-center hover:bg-gray-50 focus:outline-none"
            onClick={onClick}
        >
            {title}
            {isOpen ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
        </button>
        {isOpen && (
            <div className="p-4 border-t border-gray-100">
                {children}
            </div>
        )}
    </div>
);

const ExpertPanel = () => {
    const [openIndex, setOpenIndex] = useState(0);

    // Mock Data for Graph
    const growthData = [
        { name: 'Aug', Inscriptions: 40, Active: 24 },
        { name: 'Sep', Inscriptions: 55, Active: 35 },
        { name: 'Oct', Inscriptions: 80, Active: 60 },
        { name: 'Nov', Inscriptions: 120, Active: 90 },
        { name: 'Dec', Inscriptions: 190, Active: 150 },
        { name: 'Jan', Inscriptions: 320, Active: 280 },
    ];

    const topBakers = [
        { name: "Boulangerie Paul", recovered: "1,250€" },
        { name: "Le Fournil", recovered: "980€" },
        { name: "Maison Dubois", recovered: "850€" },
        { name: "Au Bon Pain", recovered: "720€" },
        { name: "L'Artisan", recovered: "650€" },
    ];

    return (
        <div className="mt-8">
            <h3 className="mb-4 text-secondary uppercase tracking-wide text-xs font-bold">Deep Dive Expert</h3>

            <AccordionItem
                title="📈 Croissance par cohorte (6 mois)"
                isOpen={openIndex === 0}
                onClick={() => setOpenIndex(openIndex === 0 ? -1 : 0)}
            >
                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={growthData}>
                            {/* No grid lines as per PRD 'Zéro Pollution Visuelle', but maybe minimal axis? */}
                            <XAxis dataKey="name" stroke="#9E9E9E" fontSize={12} tickLine={false} axisLine={false} />
                            <Tooltip />
                            <Line type="monotone" dataKey="Inscriptions" stroke="#9E9E9E" strokeWidth={2} dot={false} />
                            <Line type="monotone" dataKey="Active" stroke="#4CAF50" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                        </LineChart>
                    </ResponsiveContainer>
                    <div className="text-center text-xs text-secondary mt-2">
                        <span className="text-green-600 font-bold">● Actifs</span> vs <span className="text-gray-400">● Inscriptions</span>
                    </div>
                </div>
            </AccordionItem>

            <AccordionItem
                title="🔥 Heatmap Connexions"
                isOpen={openIndex === 1}
                onClick={() => setOpenIndex(openIndex === 1 ? -1 : 1)}
            >
                <div className="p-4 bg-gray-50 rounded text-center text-secondary">
                    {/* Placeholder for complex heatmap */}
                    <p>Mock Heatmap: Pic d'activité le <strong>Mardi et Jeudi</strong> entre <strong>14h et 16h</strong>.</p>
                </div>
            </AccordionItem>

            <AccordionItem
                title="🏆 Top 10 Boulangers (Argent récupéré)"
                isOpen={openIndex === 2}
                onClick={() => setOpenIndex(openIndex === 2 ? -1 : 2)}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {topBakers.map((b, i) => (
                        <div key={i} className="flex justify-between p-2 hover:bg-gray-50 rounded border-b border-gray-100 last:border-0">
                            <span className="font-medium text-sm text-gray-700">{i + 1}. {b.name}</span>
                            <span className="font-bold text-success text-sm">{b.recovered}</span>
                        </div>
                    ))}
                </div>
            </AccordionItem>
        </div>
    );
};

export default ExpertPanel;
