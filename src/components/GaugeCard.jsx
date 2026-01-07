import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { CheckCircle, AlertTriangle } from 'lucide-react';

const GaugeCard = ({ title, value, unit, percentage, target, status }) => {
    // Data for semi-circular gauge
    const data = [
        { name: 'filled', value: percentage },
        { name: 'empty', value: 100 - percentage }
    ];

    const COLORS = {
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444'
    };

    const color = COLORS[status] || COLORS.success;

    return (
        <div className="card flex flex-col items-center justify-center" style={{ minHeight: '320px' }}>
            <div className="text-secondary text-sm font-bold mb-2 uppercase tracking-wide text-center">
                {title}
            </div>

            <div className="text-4xl font-bold mb-2">
                {value}
                <span className="text-xl text-secondary font-normal ml-1">{unit}</span>
            </div>

            {/* Semi-circular gauge */}
            <div className="w-full relative" style={{ height: '150px' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="80%"
                            startAngle={180}
                            endAngle={0}
                            innerRadius="70%"
                            outerRadius="90%"
                            dataKey="value"
                            stroke="none"
                        >
                            <Cell fill={color} />
                            <Cell fill="#E5E7EB" />
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-end justify-center pb-4">
                    <span className="text-2xl font-bold" style={{ color }}>
                        {percentage}%
                    </span>
                </div>
            </div>

            <div className="flex items-center gap-2 mt-2 text-xs text-secondary">
                <span>Objectif : {target}</span>
                {status === 'success' && <CheckCircle size={14} className="text-success" />}
                {status === 'warning' && <AlertTriangle size={14} className="text-warning" />}
            </div>
        </div>
    );
};

export default GaugeCard;
