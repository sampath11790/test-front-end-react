import React, { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";

const ListItem = ({ item }) => {
  const ctx = useContext(ExpenseContext);
  return (
    <li key={item.id} style={{ fontSize: 20, listStyle: "none" }}>
      <span>{item.name}</span>--
      <span>{item.amount}</span>
      <button onClick={() => ctx.deleteData(item.id)}>Delete</button>
    </li>
  );
};

export default ListItem;
