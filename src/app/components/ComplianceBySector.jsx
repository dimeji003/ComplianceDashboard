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
    <div className="w-[45%] h-[40%] border-white shadow-md p-5 rounded-md">
        <h2 className="font-bold text-2xl py-3">Compliance By Sector</h2>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="sales" />
      </BarChart>
    </ResponsiveContainer>

    </div>
  );
}
