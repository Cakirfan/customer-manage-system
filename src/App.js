import CustomerForm from "./components/CustomerForm.jsx";
import CustomerList from "./components/CustomerList.jsx";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [customers, setCustomers] = useState([]);
  const [blink, setBlink] = useState(true);

  const addNewCustomer = (newCustomer) => {
    // setCustomers([...customers, newCustomer]);

    setCustomers((prevState) => [newCustomer, ...prevState]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prevState) => !prevState);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App p-5 rounded mb-5">
      <h1 className={`text-center mb-3 ${blink ? "text-warning" : ""}`}>
        Curtomer Manage Form
      </h1>
      <CustomerForm addNewCustomer={addNewCustomer} />
      {customers.length === 0 && "There are no customers..."}
      <CustomerList customers={customers} setCustomers={setCustomers} />
    </div>
  );
}

export default App;
