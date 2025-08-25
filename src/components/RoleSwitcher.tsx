import { useUserRoleStore } from "../store/userRoleStore";

// Allows the user to switch between different roles (requester, approver, finance).

type UserRole = "requester" | "approver" | "finance";

const RoleSwitcher = () => {
  const { role, setRole } = useUserRoleStore();

  return (
    <div>
      <label htmlFor="role-select">Select Role: </label>
      <select
        id="role-select"
        value={role}
        onChange={(e) => setRole(e.target.value as UserRole)}
      >
        <option value="requester">Requester</option>
        <option value="approver">Approver</option>
        <option value="finance">Finance</option>
      </select>
    </div>
  );
};

export default RoleSwitcher;
