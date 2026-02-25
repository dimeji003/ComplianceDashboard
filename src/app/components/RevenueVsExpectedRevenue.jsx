"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// ✅ 6 months: Aug 2025 → Jan 2026 (values are ₦ Billions)
const data = [
  { month: "Aug 2025", expected: 3.30, actual: 3.18 },
  { month: "Sep 2025", expected: 3.35, actual: 3.22 },
  { month: "Oct 2025", expected: 3.40, actual: 3.28 },
  { month: "Nov 2025", expected: 3.50, actual: 3.38 },
  { month: "Dec 2025", expected: 3.60, actual: 3.45 },
  { month: "Jan 2026", expected: 3.55, actual: 3.42 },
];

// Format: ₦3.10B
const formatBN = (v) => `₦${Number(v).toFixed(2)}B`;

// Cleaner Y ticks: 3.6B (we keep ₦ in the axis label + tooltip to avoid clutter)
const formatBTick = (v) => `${Number(v).toFixed(1)}B`;

// ✅ Clean X-axis label (no rotation): "Aug" on top, "2025" under it
const CustomMonthTick = ({ x, y, payload }) => {
  const [mon, year] = String(payload.value).split(" ");
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={14} textAnchor="middle" fontSize={12} fill="#666">
        {mon}
      </text>
      <text x={0} y={30} textAnchor="middle" fontSize={11} fill="#999">
        {year}
      </text>
    </g>
  );
};

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  const expected = payload.find((p) => p.dataKey === "expected")?.value;
  const actual = payload.find((p) => p.dataKey === "actual")?.value;

  return (
    <div className="rounded-lg bg-white px-3 py-2 shadow-md border border-gray-200">
      <div className="font-semibold">{label}</div>

      <div className="text-sm text-gray-600">
        Expected: <span className="font-medium">{formatBN(expected)}</span>
      </div>

      <div className="text-sm text-gray-600">
        Actual: <span className="font-medium">{formatBN(actual)}</span>
      </div>

      {typeof expected === "number" && typeof actual === "number" ? (
        <div className="text-xs text-gray-500 mt-1">
          Variance: <span className="font-medium">{formatBN(actual - expected)}</span>
        </div>
      ) : null}
    </div>
  );
}

export default function RevenueVsExpectedRevenue() {
  return (
    <div className="border border-white p-4 rounded-xl shadow-md w-[45%] h-[40%]">
      <div className="flex items-center gap-3 mb-3">
        <div className="text-2xl font-semibold">₦</div>
        <h1 className="text-2xl font-semibold">Revenue vs Expected Revenue</h1>
      </div>

      <div style={{ width: "100%", height: 360 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            // ✅ extra left/bottom space so axis text doesn’t collide
            margin={{ top: 10, right: 30, left: 30, bottom: 30 }}
          >
            <defs>
              <linearGradient id="actualFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" stopOpacity={0.22} />
                <stop offset="100%" stopColor="#10B981" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="4 4" opacity={0.35} />

            <XAxis
              dataKey="month"
              interval={0}
              height={44}
              tick={<CustomMonthTick />}
              tickMargin={10}
            />

            <YAxis
              domain={[0, "auto"]}
              tickFormatter={formatBTick}
              tickMargin={10}
              width={60}
              label={{
                value: "Billion Naira (₦)",
                angle: -90,
                position: "insideLeft",
                style: { fill: "#666" },
              }}
            />

            <Tooltip content={<CustomTooltip />} />
            <Legend />

            {/* Expected Revenue (blue line) */}
            <Line
              type="monotone"
              dataKey="expected"
              name="Expected Revenue"
              stroke="#3B82F6"
              strokeWidth={3}
              dot={{ r: 3 }}
              activeDot={{ r: 6 }}
            />

            {/* Actual Revenue (green line + shaded area) */}
            <Area
              type="monotone"
              dataKey="actual"
              name="Actual Revenue"
              stroke="#10B981"
              strokeWidth={3}
              fill="url(#actualFill)"
              dot={{ r: 3 }}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}