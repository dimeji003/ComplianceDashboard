"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function SubmissionTrend() {

  // ✅ DATA INSIDE THE COMPONENT
  const submissionTrendData = [
    { month: "Jan", filed: 45, late: 12 },
    { month: "Feb", filed: 60, late: 18 },
    { month: "Mar", filed: 52, late: 10 },
    { month: "Apr", filed: 75, late: 20 },
    { month: "May", filed: 68, late: 15 },
    { month: "Jun", filed: 90, late: 25 },
  ];

  return (
    <div className="w-[45%] h-[450px] shadow-md rounded-md p-5">
      <h2 className="font-bold text-xl py-3">
        Submission Trend
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={submissionTrendData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />
          <YAxis />

          <Tooltip />
          <Legend />

          <Line
            type="monotone"
            dataKey="filed"
            stroke="#22c55e"
            strokeWidth={3}
            name="Filed"
          />

          <Line
            type="monotone"
            dataKey="late"
            stroke="#ef4444"
            strokeWidth={3}
            name="Late Filing"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}