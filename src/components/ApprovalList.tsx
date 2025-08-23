import React from "react";
import { useBudgetStore } from "../store/useBudgetStore";

const ApprovalList: React.FC = () => {
  const { requests, approveRequest, rejectRequest } = useBudgetStore();

  const pendingRequests = requests.filter((r) => !r.approved);

  return (
    <div className="p-4 bg-white shadow rounded-md mt-4">
      <h2 className="text-lg font-semibold mb-2">Pending Approvals</h2>
      {pendingRequests.length === 0 ? (
        <p className="text-gray-500">No pending requests.</p>
      ) : (
        <ul className="space-y-2">
          {pendingRequests.map((req) => (
            <li
              key={req.id}
              className="border p-3 rounded-md flex justify-between items-center"
            >
              <div>
                <p className="font-medium">{req.item}</p>
                <p className="text-sm text-gray-600">${req.amount}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => approveRequest(req.id)}
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Approve
                </button>
                <button
                  onClick={() => rejectRequest(req.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Reject
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ApprovalList;
