import CreateCustomer from "./featues/customers/CreateCustomer";
import Customer from "./featues/customers/Customer";
import AccountOperations from "./featues/accounts/AccountOperations";
import BalanceDisplay from "./featues/accounts/BalanceDisplay";
import { useSelector } from "react-redux";

function App() {
  const fullName = useSelector((store) => store.customer.fullName);

  return (
    <div>  
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
