import React, { useContext } from "react";
import ListItem from "../listItem.js/listItem";
import FormItem from "../Form/Form";
import ExpenseContext from "../context/ExpenseContext";

const List = () => {
  const ctx = useContext(ExpenseContext);
  console.log(ctx.data);
  return (
    <div>
      <FormItem></FormItem>
      <ul>
        {[...ctx.data].map((each) => (
          <ListItem key={each.id} item={each}></ListItem>
        ))}
      </ul>
    </div>
  );
};

export default List;
