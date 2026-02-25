"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function FilingTrendsChart() {
  // ---------- DATA SET ----------
  const data = [
    { month: "Jan", Filed: 40, "Late Filing": 10 },
    { month: "Feb", Filed: 35, "Late Filing": 15 },
    { month: "Mar", Filed: 50, "Late Filing": 5 },
    { month: "Apr", Filed: 45, "Late Filing": 10 },
  ];

  const COLORS = {
    Filed: "#0088FE",
    "Late Filing": "#FF8042",
  };

  // ---------- COMPONENT ----------
  return (
    <div className="w-[45%] bg-white shadow-md rounded-xl p-5">
      <h2 className="font-bold text-2xl mb-4 py-3">Filing Trends</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar dataKey="Filed" stackId="a" fill={COLORS.Filed} />
          <Bar dataKey="Late Filing" stackId="a" fill={COLORS["Late Filing"]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}