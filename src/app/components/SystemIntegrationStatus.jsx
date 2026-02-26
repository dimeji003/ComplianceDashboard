import React from "react";

const systems = [
  {
    name: "Tax Filing Portal",
    status: "Operational",
    uptime: "99.8%",
    sync: "2 min ago",
  },
  {
    name: "Bank Integration API",
    status: "Operational",
    uptime: "99.5%",
    sync: "5 min ago",
  },
  {
    name: "Payment Gateway",
    status: "Operational",
    uptime: "99.9%",
    sync: "1 min ago",
  },
  {
    name: "Document Processor",
    status: "Delayed",
    uptime: "98.2%",
    sync: "15 min ago",
  },
];

function WifiIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" className="text-gray-800">
      <path
        fill="currentColor"
        d="M12 18a1.5 1.5 0 0 1 1.06 2.56A1.5 1.5 0 0 1 10.5 19.5A1.5 1.5 0 0 1 12 18Zm0-4a6 6 0 0 1 4.24 1.76l-1.41 1.41A4 4 0 0 0 12 16a4 4 0 0 0-2.83 1.17l-1.41-1.41A6 6 0 0 1 12 14Zm0-4a10 10 0 0 1 7.07 2.93l-1.41 1.41A8 8 0 0 0 12 12a8 8 0 0 0-5.66 2.34l-1.41-1.41A10 10 0 0 1 12 10Zm0-4c3.87 0 7.4 1.57 9.9 4.1l-1.41 1.41A12 12 0 0 0 12 8A12 12 0 0 0 3.51 11.51L2.1 10.1A13.9 13.9 0 0 1 12 6Z"
      />
    </svg>
  );
}

function CheckCircleIcon({ className = "" }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" className={className}>
      <path
        fill="currentColor"
        d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2Zm-1.2 14.2-3.5-3.5 1.4-1.4 2.1 2.1 5-5 1.4 1.4Z"
      />
    </svg>
  );
}

function ClockIcon({ className = "" }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" className={className}>
      <path
        fill="currentColor"
        d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2Zm1 11h-5V7h2v4h3Z"
      />
    </svg>
  );
}

function StatusPill({ status }) {
  const isOperational = status === "Operational";

  const styles = isOperational
    ? {
        icon: <CheckCircleIcon className="text-green-600" />,
        text: "text-green-700",
      }
    : {
        icon: <ClockIcon className="text-amber-600" />,
        text: "text-amber-700",
      };

  return (
    <div className="flex items-center gap-3">
      {styles.icon}
      <span className={`text-sm font-semibold ${styles.text}`}>{status}</span>
    </div>
  );
}

function SystemCard({ item }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-6 py-4 shadow-sm">
      <StatusPill status={item.status} />

      <div className="mt-4 text-md font-semibold text-gray-900">
        {item.name}
      </div>

      <div className="mt-6 flex items-center justify-between text-md text-gray-600">
        <span>
          Uptime: <span className="font-semibold text-gray-800">{item.uptime}</span>
        </span>
        <span>
          Sync: <span className="font-semibold text-gray-800">{item.sync}</span>
        </span>
      </div>
    </div>
  );
}

export default function SystemIntegrationStatus() {
  return (
    <div className="border border-white p-6 rounded-lg shadow-md bg-white w-[45%] h-[40%]">
      {/* Title */}
      <div className="flex items-center gap-4 mb-6">
        <WifiIcon />
        <h2 className="text-xl font-semibold text-gray-900">
          System Integration Status
        </h2>
      </div>

      {/* 2x2 grid like the picture */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {systems.map((item) => (
          <SystemCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}