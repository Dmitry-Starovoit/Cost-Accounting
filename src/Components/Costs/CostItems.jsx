import "./CostItems.css";
import CostItem from "./CostItem";
import CostsFilter from "./CostsFilter/CostsFilter.jsx";
import { useState } from "react";
function CostItems(props) {
  const [selectedYear, setSelectedYear] = useState("2023");
  const getYearValue = (year) => {
    setSelectedYear(year);
    console.log(year);
  };

  return (
    <div>
      <div className="costs">
        <CostsFilter selectedYear={selectedYear} getYearValue={getYearValue} />
        {props.items.map((element) => {
          return (
            <CostItem
              date={element.date}
              descriptions={element.description}
              amount={element.amount}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CostItems;
