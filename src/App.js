import "./App.css";
import CostItems from "./Components/Costs/CostItems";
import NewCost from "./Components/NewCost/NewCost";

function App() {
  const items = [
    {
      date: new Date(2023, 0, 12),
      description: "Телефон",
      amount: 319.99,
    },
    {
      date: new Date(2023, 1, 4),
      description: "Куртка",
      amount: 49.99,
    },
    {
      date: new Date(2023, 2, 10),
      description: "Кросівки",
      amount: 34.99,
    },
  ];

  return (
    <div className="App">
      <NewCost />
      <CostItems items={items} />
    </div>
  );
}

export default App;
