"use client";

import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { month: "Aug", complianceRate: 86, activeCases: 145 },
  { month: "Sep", complianceRate: 88, activeCases: 152 },
  { month: "Oct", complianceRate: 90, activeCases: 138 },
  { month: "Nov", complianceRate: 92, activeCases: 128 },
  { month: "Dec", complianceRate: 89, activeCases: 168 },
  { month: "Jan", complianceRate: 93, activeCases: 142 },
  { month: "Feb", complianceRate: 95, activeCases: 135 },
];

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  const rate = payload.find((p) => p.dataKey === "complianceRate")?.value;
  const cases = payload.find((p) => p.dataKey === "activeCases")?.value;

  return (
    <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-md">
      <div className="font-semibold">{label}</div>
      <div className="text-sm text-gray-600">
        Compliance Rate: <span className="font-medium">{rate}%</span>
      </div>
      <div className="text-sm text-gray-600">
        Active Cases: <span className="font-medium">{cases}</span>
      </div>
    </div>
  );
}

export default function ComplianceRateTrend() {
  return (
    <div className="border border-white p-4 rounded-xl shadow-md bg-white h-full">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xl font-semibold">📈</span>
        <h2 className="text-xl font-semibold">Compliance Rate Trend</h2>
      </div>

      <div style={{ width: "100%", height: 360 }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 10 }}>
            <CartesianGrid strokeDasharray="4 4" opacity={0.35} />
            <XAxis dataKey="month" tickMargin={10} />
            <YAxis tickMargin={10} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />

            <Line
              type="monotone"
              dataKey="complianceRate"
              name="Compliance Rate (%)"
              stroke="#3B82F6"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 7 }}
            />

            <Line
              type="monotone"
              dataKey="activeCases"
              name="Active Cases"
              stroke="#10B981"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}