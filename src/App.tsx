import ApprovalList from "./components/ApprovalList";
import BudgetTracker from "./components/BudgetTracker";
import RequestHistory from "./components/RequestHistory";

function App() {
  return (
    <>
      <BudgetTracker />
      <ApprovalList />
      <RequestHistory />
    </>
  );
}

export default App;
