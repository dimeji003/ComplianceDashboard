"use client";

import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";

// ✅ 5 bars (edit names/values as you like)
const data = [
  { name: "Open", value: 90 },
  { name: "In Progress", value: 130 },
  { name: "Resolved", value: 450 },
  { name: "Escalated", value: 20 },
  { name: "On Hold", value: 55 },
];

// Match your screenshot-like colors
const COLORS = ["#3B82F6", "#F59E0B", "#10B981", "#EF4444", "#8B5CF6"];

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  const v = payload[0]?.value;

  return (
    <div className="rounded-lg bg-white px-3 py-2 shadow-md border border-gray-200">
      <div className="font-semibold">{label}</div>
      <div className="text-sm text-gray-600">
        Cases: <span className="font-medium">{v}</span>
      </div>
    </div>
  );
}

export default function CasesByStatus() {
  return (
    <div className="border border-white p-4 rounded-xl shadow-md w-[45%] h-[40%]">
      <div className="flex items-center gap-3 mb-3">
        <div className="text-2xl font-semibold">√</div>
        <h1 className="text-2xl font-semibold">Casess by Status</h1>
      </div>

      <div style={{ width: "100%", height: 360 }}>
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 10, right: 30, left: 10, bottom: 10 }}>
            <CartesianGrid strokeDasharray="4 4" opacity={0.35} />
            <XAxis dataKey="name" tickMargin={10} />
            <YAxis tickMargin={10} />
            <Tooltip content={<CustomTooltip />} />

            <Bar dataKey="value" radius={[12, 12, 12, 12]}>
              {data.map((_, i) => (
                <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}