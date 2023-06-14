import React, { useEffect, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

const CustomerForm = ({ addNewCustomer }) => {
  const [customerName, setCustomerName] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (customerName.trim() === "") {
      setShowAlert(true);
      return;
    }

    const newCustomer = {
      id: Math.random(),
      customerName,
    };
    addNewCustomer(newCustomer);
    setCustomerName("");
    setShowAlert(false);
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    const capitalizedWords = input
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setCustomerName(capitalizedWords);
  };

  useEffect(() => {
    if (showAlert) {
      const timeout = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [showAlert]);

  return (
    <Form className="customer-form" onSubmit={handleSubmit}>
      <div className="d-flex align-items-center justify-content-center">
        <Form.Control
          className="customer-input w-75 my-3 p-2"
          type="text"
          placeholder="Add a new Customer..."
          onChange={handleInputChange}
          value={customerName}
        />
        <Button
          type="submit"
          className="btn-success text-white ms-3 py-2 px-3 rounded"
          style={{ border: "none" }}
        >
          <FaPlus className="m-1" />
        </Button>
      </div>

      {showAlert && (
        <Alert variant="danger" className="mt-3">
          Please enter a customer name!
        </Alert>
      )}
    </Form>
  );
};

export default CustomerForm;
