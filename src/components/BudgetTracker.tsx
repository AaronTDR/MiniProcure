import React from "react";
import { useBudgetStore } from "../store/useBudgetStore";

// Displays an overview of the budget, including total, spent, remaining, and a progress bar.

const BudgetTracker: React.FC = () => {
  const { budget, requests } = useBudgetStore();

  const totalSpent = requests.reduce(
    (sum, req) => (req.approved ? sum + req.amount : sum),
    0
  );
  const remaining = budget - totalSpent;
  const percentUsed = Math.min((totalSpent / budget) * 100, 100);

  return (
    <div className="p-4 bg-white shadow rounded-md">
      <h2 className="text-lg font-semibold mb-2">Budget Overview</h2>
      <div className="mb-2">
        <p>Total Budget: ${budget}</p>
        <p>Spent: ${totalSpent}</p>
        <p>Remaining: ${remaining}</p>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className={`h-4 rounded-full ${
            percentUsed > 90 ? "bg-red-500" : "bg-green-500"
          }`}
          style={{ width: `${percentUsed}%` }}
        />
      </div>
    </div>
  );
};

export default BudgetTracker;
