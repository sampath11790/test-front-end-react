import { useContext, useEffect } from "react";
import "./App.css";
import List from "./componsent/list/list";
import ExpenseContext from "./componsent/context/ExpenseContext";

function App() {
  const ctx = useContext(ExpenseContext);
  useEffect(() => {
    ctx.getData();
  }, []);
  return (
    <div className="App">
      <h1>welcome</h1>
      <List></List>
    </div>
  );
}

export default App;
