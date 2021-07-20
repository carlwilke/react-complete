import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expenses = [
  {
    id: "e1",
    title: "Curry of Doom",
    amount: 44.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Bog Rolls",
    amount: 99.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Pepto Bismol",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Underwear (Kevlar)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  return (
    <div>
      <h1>Your Expense Magic</h1>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
