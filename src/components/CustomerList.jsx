import { ListGroup } from "react-bootstrap";
import CustomerItem from "./CustomerItem";

const CustomerList = ({ customers, setCustomers }) => {
  //! delete Customer

  const handleDelete = (item) => {
    // console.log(item);
    setCustomers(customers.filter((customer) => customer.id !== item.id));
  };

  return (
    <ListGroup className="customer-list">
      {customers.map((customer) => (
        <CustomerItem
          customer={customer}
          handleDelete={handleDelete}
          key={customer.id}
        />
      ))}
    </ListGroup>
  );
};

export default CustomerList;
