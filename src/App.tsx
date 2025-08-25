import RoleSwitcher from "./components/RoleSwitcher";
import RequestForm from "./components/RequestForm";
import ApprovalList from "./components/ApprovalList";
import BudgetTracker from "./components/BudgetTracker";
import { useUserRoleStore } from "./store/userRoleStore";
import RequestHistory from "./components/RequestHistory";

const App = () => {
  const { role } = useUserRoleStore();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>MiniProcure Demo</h1>

      {/* Role Switcher for testing */}
      <RoleSwitcher />

      {/* Conditional rendering based on role */}
      {role === "requester" && <RequestForm />}
      {role === "approver" && <ApprovalList />}
      {role === "finance" && <BudgetTracker />}
      <RequestHistory />
    </div>
  );
};

export default App;
