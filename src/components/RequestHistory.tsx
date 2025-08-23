// src/components/RequestHistory.tsx
import React from "react";
import { useBudgetStore } from "../store/useBudgetStore";

const RequestHistory: React.FC = () => {
  const { requests } = useBudgetStore();

  const sortedRequests = [...requests].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return (
    <div className="p-4 bg-white shadow rounded-md mt-4">
      <h2 className="text-lg font-semibold mb-2">Request History</h2>
      {sortedRequests.length === 0 ? (
        <p className="text-gray-500">No requests submitted yet.</p>
      ) : (
        <ul className="space-y-2">
          {sortedRequests.map((req) => (
            <li key={req.id} className="border p-3 rounded-md">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{req.item}</p>
                  <p className="text-sm text-gray-600">${req.amount}</p>
                </div>
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    req.approved
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {req.approved ? "Approved" : "Rejected"}
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Submitted: {new Date(req.timestamp).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RequestHistory;
