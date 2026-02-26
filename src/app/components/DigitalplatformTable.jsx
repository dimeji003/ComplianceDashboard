"use client";

import {
  Monitor,
  Smartphone,
  Code2,
  ExternalLink,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

export default function DigitalPlatformTable() {
  const platforms = [
    {
      name: "Web Portal",
      icon: <Monitor className="text-blue-500" size={18} />,
      users: 645,
      transactions: "8,234",
      success: "98.5%",
      response: "1.2s",
      growth: "+12%",
      growthUp: true,
    },
    {
      name: "Mobile App",
      icon: <Smartphone className="text-green-500" size={18} />,
      users: 287,
      transactions: "3,156",
      success: "97.2%",
      response: "1.8s",
      growth: "+18%",
      growthUp: true,
    },
    {
      name: "API Integration",
      icon: <Code2 className="text-purple-500" size={18} />,
      users: 123,
      transactions: "5,678",
      success: "99.1%",
      response: "0.4s",
      growth: "+3%",
      growthUp: true,
    },
    {
      name: "Third-party",
      icon: <ExternalLink className="text-orange-500" size={18} />,
      users: 26,
      transactions: "456",
      success: "94.8%",
      response: "2.1s",
      growth: "-5%",
      growthUp: false,
    },
  ];

  return (
    <div className="w-[86%] m-auto mt-11 bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-5 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800">
          Digital Platform Usage Details
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          Performance metrics across all filing platforms
        </p>
      </div>

      {/* TABLE */}
      <table className="w-full text-base text-gray-700 table-fixed">
        {/* HEADER */}
        <thead className="bg-gray-50 text-gray-400 text-sm uppercase tracking-wide">
          <tr>
            <th className="px-6 py-3 text-left font-medium w-[25%]">
              Platform
            </th>
            <th className="px-6 py-3 text-left font-medium">
              Active Users
            </th>
            <th className="px-6 py-3 text-left font-medium">
              Transactions
            </th>
            <th className="px-6 py-3 text-left font-medium">
              Success Rate
            </th>
            <th className="px-6 py-3 text-left font-medium">
              Avg Response
            </th>
            <th className="px-6 py-3 text-left font-medium">
              Monthly Growth
            </th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {platforms.map((item, index) => (
            <tr
              key={index}
              className="border-t border-gray-100 hover:bg-gray-50/40"
            >
              {/* PLATFORM */}
              <td className="px-6 py-4">
                <div className="flex items-center gap-2 font-medium text-gray-800">
                  {item.icon}
                  {item.name}
                </div>
              </td>

              <td className="px-6 py-4">{item.users}</td>

              <td className="px-6 py-4">{item.transactions}</td>

              <td
                className={`px-6 py-4 font-medium ${
                  item.success >= "98%"
                    ? "text-green-500"
                    : item.success >= "96%"
                    ? "text-amber-500"
                    : "text-red-500"
                }`}
              >
                {item.success}
              </td>

              <td className="px-6 py-4 text-gray-500">
                {item.response}
              </td>

              <td
                className={`px-6 py-4 flex items-center gap-1 font-medium ${
                  item.growthUp
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {item.growthUp ? (
                  <TrendingUp size={16} />
                ) : (
                  <TrendingDown size={16} />
                )}
                {item.growth}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}