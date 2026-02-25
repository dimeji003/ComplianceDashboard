"use client";

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

const data = [
  { status: "Objection", cases: 95 },
  { status: "Reconciliation", cases: 145 },
  { status: "Assessment", cases: 75 },
  { status: "Pending", cases: 55 },
  { status: "Concluded", cases: 420 },
];

const COLORS = [
  "#EF4444", // Objection
  "#3B82F6", // Reconciliation
  "#F59E0B", // Assessment
  "#6B7280", // Pending
  "#10B981", // Concluded
];

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-md">
      <p className="font-semibold">{label}</p>
      <p className="text-sm text-gray-600">
        Cases: <span className="font-medium">{payload[0].value}</span>
      </p>
    </div>
  );
}

export default function CasesByStatus() {
  return (
    <div className="border border-white p-4 rounded-xl shadow-md w-[45%] h-[40%]">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xl font-semibold">✔</span>
        <h2 className="text-xl font-semibold">Cases by Status</h2>
      </div>

      <div style={{ width: "100%", height: 340 }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            barCategoryGap="20%"   // ✅ spacing between categories
            barGap={6}             // ✅ spacing between bars
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="4 4" opacity={0.35} />
            <XAxis dataKey="status" tickMargin={10} />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />

            <Bar
              dataKey="cases"
              radius={[10, 10, 0, 0]}
              maxBarSize={55}       // ✅ prevents fat bars
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}