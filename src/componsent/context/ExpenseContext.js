import React, { createContext } from "react";

const ExpenseContext = createContext({
  data: [],
  postData: () => {},
  getData: () => {},
  deleteData: () => {},
});

export default ExpenseContext;
