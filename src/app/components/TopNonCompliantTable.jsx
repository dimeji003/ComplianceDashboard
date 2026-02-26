import React from "react";

const companies = [
  {
    rank: 1,
    name: "TechCorp International",
    violations: 12,
    outstanding: 487500,
    severity: "Critical",
  },
  {
    rank: 2,
    name: "Digital Marketplace Ltd.",
    violations: 9,
    outstanding: 312800,
    severity: "Critical",
  },
  {
    rank: 3,
    name: "StreamVision Media",
    violations: 8,
    outstanding: 245600,
    severity: "High",
  },
  {
    rank: 4,
    name: "CloudHub Services",
    violations: 7,
    outstanding: 189300,
    severity: "High",
  },
  {
    rank: 5,
    name: "E-Commerce Global",
    violations: 6,
    outstanding: 156900,
    severity: "High",
  },
  {
    rank: 6,
    name: "DataFlow Systems",
    violations: 5,
    outstanding: 98400,
    severity: "Medium",
  },
];

const formatMoney = (amount) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN", // change to "USD" if you want dollars
    maximumFractionDigits: 0,
  }).format(amount);

function SeverityBadge({ severity }) {
  const base =
    "inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold border";

  const map = {
    Critical: "bg-red-100 text-red-700 border-red-200",
    High: "bg-orange-100 text-orange-700 border-orange-200",
    Medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
    Low: "bg-green-100 text-green-700 border-green-200",
  };

  return (
    <span className={`${base} ${map[severity] || "bg-gray-100 text-gray-700 border-gray-200"}`}>
      {severity}
    </span>
  );
}

function DownRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" className="text-gray-500">
      <path
        fill="currentColor"
        d="M19 7v10a2 2 0 0 1-2 2H7v-2h10V7h2Z"
      />
      <path
        fill="currentColor"
        d="M7 7h7v2H9.41l10.3 10.29-1.42 1.42L8 10.41V14H6V7a0 0 0 0 1 0 0Z"
      />
    </svg>
  );
}

export default function TopNonCompliantTable() {
  return (
    <div className="border border-white p-4 rounded-xl shadow-md bg-white">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xl">⛔</span>
        <h2 className="text-2xl font-semibold">Top Non-Compliant Companies</h2>
      </div>

      <div className="flex flex-col gap-5">
        {companies.map((c) => (
          <div
            key={c.rank}
            className="rounded-2xl border border-gray-200 bg-white px-6 py-5 shadow-sm"
          >
            <div className="flex items-center justify-between gap-6">
              {/* Left: rank + details */}
              <div className="flex items-center gap-6 min-w-0">
                <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center text-xl font-semibold text-gray-700">
                  {c.rank}
                </div>

                <div className="min-w-0">
                  <div className="text-2xl font-semibold text-gray-900 truncate">
                    {c.name}
                  </div>

                  <div className="mt-2 flex items-center gap-8">
                    <div className="flex items-center gap-2 text-xl text-gray-600">
                      <DownRightIcon />
                      <span>{c.violations} violations</span>
                    </div>

                    <div className="text-xl font-semibold text-red-600">
                      {formatMoney(c.outstanding)} outstanding
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: severity pill */}
              <div className="shrink-0">
                <SeverityBadge severity={c.severity} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}