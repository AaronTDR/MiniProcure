import React, { useState } from "react";
import { useBudgetStore } from "../store/useBudgetStore";

const RequestForm: React.FC = () => {
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const { addRequest } = useBudgetStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!item || amount <= 0) return;
    addRequest(item, amount);
    setItem("");
    setAmount(0);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white shadow rounded-md mt-4 space-y-4"
    >
      <h2 className="text-lg font-semibold">Submit New Request</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">Item</label>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
          placeholder="e.g., Laptop"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Amount
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
          placeholder="e.g., 1200"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Submit Request
      </button>
    </form>
  );
};

export default RequestForm;
