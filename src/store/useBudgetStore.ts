// Zustand store for managing budget and requests, including adding, approving, and rejecting requests.

import { create } from "zustand";
import { nanoid } from
import { create } from "zustand";
import { nanoid } from "nanoid";

type Request = {
  id: string;
  item: string;
  amount: number;
  approved: boolean;
  timestamp: string;
};

interface BudgetState {
  budget: number;
  requests: Request[];
  addRequest: (item: string, amount: number) => void;
  approveRequest: (id: string) => void;
  rejectRequest: (id: string) => void;
}

export const useBudgetStore = create<BudgetState>((set) => ({
  budget: 1000,
  requests: [],
  addRequest: (item, amount) => {
    const newRequest: Request = {
      id: nanoid(),
      item,
      amount,
      approved: false,
      timestamp: new Date().toISOString(),
    };
    set((state) => ({
      requests: [...state.requests, newRequest],
    }));
  },
  approveRequest: (id) =>
    set((state) => ({
      requests: state.requests.map((r) =>
        r.id === id ? { ...r, approved: true } : r
      ),
    })),
  rejectRequest: (id) =>
    set((state) => ({
      requests: state.requests.filter((r) => r.id !== id),
    })),
}));
