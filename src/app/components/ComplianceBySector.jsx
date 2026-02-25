"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Manufacturing", sales: 400 },
  { name: "Finance", sales: 300 },
  { name: "Mar", sales: 500 },
  { name: "Apr", sales: 200 },
  { name: "Apr", sales: 200 },
  { name: "Apr", sales: 200 },
  { name: "Apr", sales: 200 },
  { name: "Apr", sales: 200 },
];

export default function ComplianceBySector() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="sales" />
      </BarChart>
    </ResponsiveContainer>
  );
}
