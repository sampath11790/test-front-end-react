import React, { useContext, useState } from "react";
import ExpenseContext from "../context/ExpenseContext";
const Initial_state = { name: "", amount: "" };
const FormItem = () => {
  const [enteredInput, setenteredInput] = useState(Initial_state);
  const ctx = useContext(ExpenseContext);
  const addEnteredInput = (e) => {
    setenteredInput({ ...enteredInput, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    ctx.postData(enteredInput);
  };

  return (
    <div>
      <label>Name</label>
      <br />
      <input
        type="text"
        value={enteredInput.name}
        name="name"
        onChange={addEnteredInput}
      ></input>
      <br />
      <label>Amount</label>
      <br />
      <input
        type="number"
        value={enteredInput.amount}
        name="amount"
        onChange={addEnteredInput}
      ></input>
      <br />
      <button onClick={submitHandler}>Add Product</button>
      <br />
    </div>
  );
};

export default FormItem;
