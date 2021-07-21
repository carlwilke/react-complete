import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

// Initial static display data
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Curry of Doom",
    amount: 44.12,
    date: new Date(2021, 2, 14),
  },
  {
    id: "e2",
    title: "Bog Rolls",
    amount: 99.49,
    date: new Date(2021, 2, 15),
  },
  {
    id: "e3",
    title: "Pepto Bismol",
    amount: 294.67,
    date: new Date(2021, 2, 16),
  },
  {
    id: "e4",
    title: "New Underwear (Kevlar)",
    amount: 450,
    date: new Date(2021, 2, 18),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h1>Your Expense Magic</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
