import ApprovalList from "./components/ApprovalList";
import BudgetTracker from "./components/BudgetTracker";
import RequestForm from "./components/RequestForm";
import RequestHistory from "./components/RequestHistory";

function App() {
  return (
    <>
      <RequestForm />
      <BudgetTracker />
      <ApprovalList />
      <RequestHistory />
    </>
  );
}

export default App;
