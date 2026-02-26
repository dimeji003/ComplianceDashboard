"use client";

import { PieChart, Pie, Cell, Tooltip } from "recharts";

// ✅ Data: adjust numbers to match real usage
const data = [
  { name: "Web Portal", value: 300 },
  { name: "Mobile App", value: 150 },
  { name: "API Integration", value: 100 },
  { name: "Third Party", value: 50 },
];

// Colors for each slice
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function PlatformUsageChart() {
  return (
    <div className="w-[45%] h-[40%] bg-white shadow-md rounded-xl p-5 ">
      <h2 className="font-bold text-2xl mb-4 py-3">Digital Platform Usage</h2>

      <PieChart width={450} height={325}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          dataKey="value"
          label={({ name, percent }) =>
            `${name} (${(percent * 100).toFixed(0)}%)`
          }
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `${value} users`} />
      </PieChart>
    </div>
  );
}