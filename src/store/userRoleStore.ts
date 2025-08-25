import { create } from "zustand";

// Zustand store for managing user roles in the application.
type Role = "requester" | "approver" | "finance";

interface UserRoleState {
  role: Role;
  setRole: (role: Role) => void;
}

export const useUserRoleStore = create<UserRoleState>((set) => ({
  role: "requester", // default role
  setRole: (role) => set({ role }),
}));
