import React from 'react';
import { ArrowUpRight, ArrowDownRight, AlertTriangle, CheckCircle, AlertCircle } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const KPICard = ({ title, value, unit, variation, target, current, status, sparklineData }) => {
  // Calculate progress percentage, capped at 100%
  const progress = Math.min((current / target) * 100, 100);

  // Determine color based on status
  const getColorClass = () => {
    if (status === 'success') return 'text-success';
    if (status === 'warning') return 'text-warning';
    if (status === 'danger') return 'text-danger';

    if (progress >= 90) return 'text-success';
    if (progress >= 70) return 'text-warning';
    return 'text-danger';
  };

  const getSparklineColor = () => {
    if (status === 'success') return '#4CAF50';
    if (status === 'warning') return '#FF9800';
    return '#F44336';
  };

  const isPositive = variation >= 0;

  return (
    <div className="card">
      <div className="text-secondary text-sm font-bold mb-2 uppercase tracking-wide">{title}</div>

      <div className="flex items-end justify-between mb-4">
        <div>
          <div className="text-4xl font-bold">
            {value}
            <span className="text-xl text-secondary font-normal ml-1">{unit}</span>
          </div>
          <div className={`flex items-center ${isPositive ? 'text-success' : 'text-danger'} text-sm font-bold mt-1`}>
            {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
            {Math.abs(variation)}% vs N-1
          </div>
        </div>

        {/* BCG Quick Win #1: Sparkline */}
        {sparklineData && (
          <div className="w-24 h-12">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sparklineData}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={getSparklineColor()}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 mb-1">
        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-500 ${status === 'success' ? 'bg-success' : status === 'warning' ? 'bg-warning' : 'bg-danger'}`}
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-xs text-secondary font-bold">{Math.round(progress)}%</span>
      </div>

      <div className="flex justify-between items-center text-xs text-secondary">
        <span>Objectif : {target}</span>
        {status === 'success' && <CheckCircle size={14} className="text-success" />}
        {status === 'warning' && <AlertTriangle size={14} className="text-warning" />}
        {status === 'danger' && <AlertCircle size={14} className="text-danger" />}
      </div>
    </div>
  );
};

export default KPICard;
