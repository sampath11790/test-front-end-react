import React, { useState } from "react";
import ExpenseContext from "./ExpenseContext";

const ContextProvider = (props) => {
  const [data, setdata] = useState("");
  const postData = async (obj) => {
    try {
      const jsondata = JSON.stringify(obj);
      const response = await fetch("http://54.174.5.88:5000/post-product", {
        method: "POST",
        body: jsondata,
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      getData();
    } catch (error) {
      console.error(error);
    }
  };
  async function getData() {
    try {
      const response = await fetch("http://54.174.5.88:5000/", {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
        },
      });
      const fetcheddata = await response.json();
      console.log(fetcheddata);
      setdata(fetcheddata);
    } catch (error) {
      console.error(error);
    }
  }
  const deleteItem = async (id) => {
    const response = await fetch(`http://54.174.5.88:5000/post-product/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    getData();
  };
  return (
    <ExpenseContext.Provider
      value={{
        data: data,
        postData: postData,
        getData: getData,
        deleteData: deleteItem,
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ContextProvider;
