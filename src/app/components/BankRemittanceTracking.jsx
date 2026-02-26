import React from "react";

const rows = [
  {
    bank: "National Bank",
    year: 2025,
    amountDue: 8245600,
    amountRemitted: 7901200,
    transmissionsAbove10k: 453,
    lastUpdate: "2026-02-18",
  },
  {
    bank: "Commerce Bank",
    year: 2025,
    amountDue: 6890400,
    amountRemitted: 6658800,
    transmissionsAbove10k: 389,
    lastUpdate: "2026-02-20",
  },
  {
    bank: "Global Finance",
    year: 2025,
    amountDue: 5678900,
    amountRemitted: 5312000,
    transmissionsAbove10k: 347,
    lastUpdate: "2026-02-17",
  },
  {
    bank: "Trust Bank",
    year: 2025,
    amountDue: 4567300,
    amountRemitted: 4389000,
    transmissionsAbove10k: 308,
    lastUpdate: "2026-02-12",
  },
  {
    bank: "Central Bank",
    year: 2025,
    amountDue: 3890700,
    amountRemitted: 3724000,
    transmissionsAbove10k: 270,
    lastUpdate: "2026-02-19",
  },
];

const formatCurrency = (amount) => `₦${amount.toLocaleString("en-NG")}`;

export default function BankRemittanceTracking() {
  return (
    <div className="border border-white p-4 rounded-xl shadow-md bg-white my-10 w-[85%] m-auto">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-2xl font-semibold">🏦</div>
        <h1 className="text-2xl font-semibold">Bank Remittance Tracking</h1>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-100">
        <table className="min-w-[1100px] w-full border-collapse">
          <thead className="bg-gray-50">
            <tr className="text-left text-xs tracking-widest text-gray-500">
              <th className="px-6 py-4 font-semibold">BANK</th>
              <th className="px-6 py-4 font-semibold">YEAR OF TRANSACTIONS</th>
              <th className="px-6 py-4 font-semibold">AMOUNT DUE</th>
              <th className="px-6 py-4 font-semibold">AMOUNT REMITTED</th>
              <th className="px-6 py-4 font-semibold">
                # INTERBANK TRANSMISSIONS (ABOVE ₦10,000)
              </th>
              <th className="px-6 py-4 font-semibold">LAST UPDATE (DATE)</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((r) => (
              <tr
                key={`${r.bank}-${r.year}`}
                className="border-t border-gray-100 hover:bg-gray-50 transition"
              >
                <td className="px-6 py-5 text-blue-600 font-semibold">
                  {r.bank}
                </td>

                <td className="px-6 py-5 text-gray-900 font-medium">{r.year}</td>

                <td className="px-6 py-5 font-semibold text-gray-900">
                  {formatCurrency(r.amountDue)}
                </td>

                <td className="px-6 py-5 font-semibold text-gray-900">
                  {formatCurrency(r.amountRemitted)}
                </td>

                <td className="px-6 py-5 text-gray-700 font-medium">
                  {r.transmissionsAbove10k.toLocaleString("en-NG")}
                </td>

                <td className="px-6 py-5 text-gray-700">{r.lastUpdate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}