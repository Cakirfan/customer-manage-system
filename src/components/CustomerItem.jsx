import React from "react";
import { ListGroupItem } from "react-bootstrap";
import { FaRegTrashAlt } from "react-icons/fa";

const CustomerItem = ({ customer, handleDelete }) => {
  // console.log(customer);
  return (
    <>
      <ListGroupItem className="customer-item d-flex justify-content-between fs-2 mt-3">
        <div className="customer-info">
          <img
            src="https://i.pravatar.cc/300"
            alt=""
            className="customer-avatar"
            width={75}
            style={{ borderRadius: "50%" }}
          />
          <span className="customer-name mx-3 fs-5">{customer.customerName}</span>
        </div>
        <button
          className="text-white bg-danger my-auto d-flex align-items-center"
          onClick={() => handleDelete(customer)}
          style={{ height: "50px", borderRadius: "5px", border: "none" }}
        >
          <FaRegTrashAlt className="mx-1" />
        </button>
      </ListGroupItem>
    </>
  );
};

export default CustomerItem;
