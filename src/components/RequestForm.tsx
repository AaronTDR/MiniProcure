import React, { useState } from "react";

const RequestForm: React.FC = () => {
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Request submitted:", { item, amount });
    setItem("");
    setAmount("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white rounded shadow"
    >
      <h2 className="text-xl font-bold mb-4">Request Form</h2>

      <label className="block mb-2">
        Item:
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="w-full border p-2 rounded mt-1"
          placeholder="Enter item name"
        />
      </label>

      <label className="block mb-4">
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border p-2 rounded mt-1"
          placeholder="Enter amount"
        />
      </label>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit Request
      </button>
    </form>
  );
};

export default RequestForm;
