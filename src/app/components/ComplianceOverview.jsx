"use client";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function MyPieChart() {
  return (
    <div className=" w-[45%] h-[40%] border-white shadow-md rounded-md p-5">
        <h2 className="font-bold text-2xl py-3">Compliance Overview</h2>

        <PieChart width={400} height={300} className="pt-5">
          
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={120}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
    </div>
      );
}