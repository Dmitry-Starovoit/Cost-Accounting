import { useState } from "react";
import "./App.css";
import CostItems from "./Components/Costs/CostItems";
import NewCost from "./Components/NewCost/NewCost";
const items = [
  {
    id: 1,
    date: new Date(2023, 2, 10),
    description: "Кросівки",
    amount: 34.99,
  },

  {
    id: 2,
    date: new Date(2023, 1, 4),
    description: "Куртка",
    amount: 49.99,
  },
  {
    id: 3,
    date: new Date(2023, 0, 12),
    description: "Телефон",
    amount: 319.99,
  },
];
function App() {
  const [updateItems, setUpdateItems] = useState(items);

  const addCostHandler = (costData) => {
    setUpdateItems((prevItems) => {
      return [costData, ...prevItems];
    });
    console.log(updateItems);
    console.log(items);
  };

  return (
    <div className="App">
      <NewCost addCostHandler={addCostHandler} />
      <CostItems items={updateItems} />
    </div>
  );
}

export default App;
