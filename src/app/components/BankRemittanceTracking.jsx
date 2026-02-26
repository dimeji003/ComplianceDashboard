import React from "react";

const banks = [
  {
    name: "National Bank",
    totalTx: 453,
    completed: 425,
    pending: 23,
    failed: 5,
    totalAmount: 8245600,
    lastSync: "5 min ago",
  },
  {
    name: "Commerce Bank",
    totalTx: 389,
    completed: 368,
    pending: 18,
    failed: 3,
    totalAmount: 6890400,
    lastSync: "3 min ago",
  },
  {
    name: "Global Finance",
    totalTx: 347,
    completed: 312,
    pending: 28,
    failed: 7,
    totalAmount: 5678900,
    lastSync: "8 min ago",
  },
  {
    name: "Trust Bank",
    totalTx: 308,
    completed: 289,
    pending: 15,
    failed: 4,
    totalAmount: 4567300,
    lastSync: "12 min ago",
  },
  {
    name: "Central Bank",
    totalTx: 270,
    completed: 256,
    pending: 12,
    failed: 2,
    totalAmount: 3890700,
    lastSync: "6 min ago",
  },
];

const money = (n) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN", 
    maximumFractionDigits: 0,
  }).format(n);

const pct = (completed, total) =>
  total === 0 ? "0%" : `${((completed / total) * 100).toFixed(1)}%`;

function IconChevron() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" className="text-gray-500">
      <path
        fill="currentColor"
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBank() {
  return (
    <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center border border-blue-100">
      <svg width="22" height="22" viewBox="0 0 24 24" className="text-blue-600">
        <path
          fill="currentColor"
          d="M3 21V9h18v12h-2v-2H5v2H3Zm2-4h14V11H5v6Zm2-2v-2h2v2H7Zm4 0v-2h2v2h-2Zm4 0v-2h2v2h-2ZM2 8V6l10-4 10 4v2H2Z"
        />
      </svg>
    </div>
  );
}

function Stat({ type, value }) {
  const styles = {
    completed: "text-green-600",
    pending: "text-amber-600",
    failed: "text-red-600",
  };

  const icon = {
    completed: (
      <svg width="22" height="22" viewBox="0 0 24 24" className="text-green-600">
        <path
          fill="currentColor"
          d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm-1 14-4-4 1.41-1.41L11 13.17l5.59-5.58L18 9Z"
        />
      </svg>
    ),
    pending: (
      <svg width="22" height="22" viewBox="0 0 24 24" className="text-amber-600">
        <path
          fill="currentColor"
          d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 11h4v2h-6V7h2Z"
        />
      </svg>
    ),
    failed: (
      <svg width="22" height="22" viewBox="0 0 24 24" className="text-red-600">
        <path
          fill="currentColor"
          d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm3.54 13.54L14.12 12l1.42-1.41-1.42-1.42L12.7 10.6l-1.42-1.43-1.41 1.42 1.42 1.41-1.42 1.42 1.41 1.41 1.42-1.42 1.42 1.42Z"
        />
      </svg>
    ),
  };

  return (
    <div className={`flex items-center gap-2 font-semibold ${styles[type] || ""}`}>
      {icon[type]}
      <span className="text-xl">{value}</span>
    </div>
  );
}

function CompletionRate({ completed, total }) {
  const rate = (completed / Math.max(total, 1)) * 100;
  const color = rate < 90 ? "text-red-600" : "text-amber-600";
  return <span className={`font-semibold text-xl ${color}`}>{pct(completed, total)}</span>;
}

export default function BankRemittanceTracking() {
  return (
    <div className="border border-white p-4 rounded-xl shadow-md bg-white">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Bank Remittance Tracking</h2>
        <p className="text-gray-500 mt-1">
          Monitor tax remittances across all integrated banking partners
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-100">
        <table className="min-w-[1100px] w-full border-collapse">
          <thead className="bg-gray-50">
            <tr className="text-left text-xs tracking-widest text-gray-500">
              <th className="px-6 py-4 font-semibold w-10"></th>
              <th className="px-6 py-4 font-semibold">BANK</th>
              <th className="px-6 py-4 font-semibold">TOTAL TRANSACTIONS</th>
              <th className="px-6 py-4 font-semibold">COMPLETED</th>
              <th className="px-6 py-4 font-semibold">PENDING</th>
              <th className="px-6 py-4 font-semibold">FAILED</th>
              <th className="px-6 py-4 font-semibold">TOTAL AMOUNT</th>
              <th className="px-6 py-4 font-semibold">COMPLETION RATE</th>
              <th className="px-6 py-4 font-semibold">LAST SYNC</th>
            </tr>
          </thead>

          <tbody>
            {banks.map((b) => (
              <tr
                key={b.name}
                className="border-t border-gray-100 hover:bg-gray-50 transition"
              >
                <td className="px-6 py-6">
                  <IconChevron />
                </td>

                <td className="px-6 py-6">
                  <div className="flex items-center gap-4">
                    <IconBank />
                    <div className="text-xl font-semibold text-gray-900">
                      {b.name}
                    </div>
                  </div>
                </td>

                <td className="px-6 py-6 text-xl font-semibold text-gray-900">
                  {b.totalTx}
                </td>

                <td className="px-6 py-6">
                  <Stat type="completed" value={b.completed} />
                </td>

                <td className="px-6 py-6">
                  <Stat type="pending" value={b.pending} />
                </td>

                <td className="px-6 py-6">
                  <Stat type="failed" value={b.failed} />
                </td>

                <td className="px-6 py-6 text-xl font-semibold text-gray-900">
                  {money(b.totalAmount)}
                </td>

                <td className="px-6 py-6">
                  <CompletionRate completed={b.completed} total={b.totalTx} />
                </td>

                <td className="px-6 py-6 text-lg text-gray-600 font-medium">
                  {b.lastSync}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}