import React from "react";

const rows = [
  {
    caseId: "T-2026-001",
    company: "Alpha Logistics Ltd.",
    caseType: "Non-Payment",
    status: "Objection",
    daysOpen: 32,
    lastUpdate: "2026-02-05",
    disputedAmount: 125000000,
  },
  {
    caseId: "T-2026-002",
    company: "Zenith Digital Services",
    caseType: "Partial Payment",
    status: "Reconciliation",
    daysOpen: 18,
    lastUpdate: "2026-02-12",
    disputedAmount: 82000000,
  },
  {
    caseId: "T-2026-003",
    company: "Prime Retail Group",
    caseType: "Non-Payment",
    status: "Pending",
    daysOpen: 45,
    lastUpdate: "2026-01-30",
    disputedAmount: 240000000,
  },
  {
    caseId: "T-2026-004",
    company: "Nova Energy PLC",
    caseType: "Partial Payment",
    status: "Assessment",
    daysOpen: 9,
    lastUpdate: "2026-02-15",
    disputedAmount: 67000000,
  },
  {
    caseId: "T-2026-005",
    company: "Vertex Fintech",
    caseType: "Non-Payment",
    status: "Concluded",
    daysOpen: 12,
    lastUpdate: "2026-02-10",
    disputedAmount: 98000000,
  },
];

const formatCurrency = (amount) =>
  `₦${amount.toLocaleString("en-NG")}`;

function StatusBadge({ status }) {
  const base =
    "inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold";

  const styles = {
    Objection: "bg-red-100 text-red-700",
    Reconciliation: "bg-blue-100 text-blue-700",
    Concluded: "bg-green-100 text-green-700",
    Assessment: "bg-yellow-100 text-yellow-700",
    Pending: "bg-gray-100 text-gray-700",
  };

  return (
    <span className={`${base} ${styles[status] || "bg-gray-100 text-gray-700"}`}>
      {status}
    </span>
  );
}

export default function CasesByStatusTable() {
  return (
    <div className="border border-white p-4 rounded-xl shadow-md bg-white my-10 w-[85%] m-auto">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-xl font-semibold">📋</div>
        <h1 className="text-xl font-semibold">Tax Dispute Cases</h1>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-100">
        <table className="min-w-[1000px] w-full border-collapse">
          <thead className="bg-gray-50">
            <tr className="text-left text-xs tracking-widest text-gray-500">
              <th className="px-6 py-4 font-semibold">CASE ID</th>
              <th className="px-6 py-4 font-semibold">COMPANY</th>
              <th className="px-6 py-4 font-semibold">CASE TYPE</th>
              <th className="px-6 py-4 font-semibold">STATUS</th>
              <th className="px-6 py-4 font-semibold">DAYS OPEN</th>
              <th className="px-6 py-4 font-semibold">LAST UPDATE</th>
              <th className="px-6 py-4 font-semibold">DISPUTED AMOUNT</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {rows.map((r) => (
              <tr key={r.caseId} className="border-t border-gray-100 hover:bg-gray-50 transition">
                <td className="px-6 py-5 text-blue-600 font-semibold">
                  {r.caseId}
                </td>

                <td className="px-6 py-5 text-gray-900 font-medium">
                  {r.company}
                </td>

                <td className="px-6 py-5 text-gray-700">
                  {r.caseType}
                </td>

                <td className="px-6 py-5">
                  <StatusBadge status={r.status} />
                </td>

                <td className="px-6 py-5">
                  <span
                    className={
                      r.daysOpen >= 30
                        ? "text-red-600 font-semibold"
                        : "text-gray-700 font-medium"
                    }
                  >
                    {r.daysOpen} days
                  </span>
                </td>

                <td className="px-6 py-5 text-gray-700">
                  {r.lastUpdate}
                </td>

                <td className="px-6 py-5 font-semibold text-gray-900">
                  {formatCurrency(r.disputedAmount)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}