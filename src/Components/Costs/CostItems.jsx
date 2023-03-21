import "./CostItems.css";
import CostItem from "./CostItem/CostItem";
import CostsFilter from "./CostsFilter/CostsFilter.jsx";
import { useState } from "react";
import Diagram from "./Diagram/Diagram";
import CostsDiagram from "./CostsDiagram";
function CostItems(props) {
  const [selectedYear, setSelectedYear] = useState("2023");
  const getYearValue = (year) => {
    setSelectedYear(year);
  };

  const listItems = props.items.filter((element) => {
    return element.date.getFullYear().toString() === selectedYear;
  });
  return (
    <div>
      <div className="costs">
        <CostsFilter selectedYear={selectedYear} getYearValue={getYearValue} />
        <CostsDiagram costs={listItems} />
        {listItems.length === 0 ? (
          <p className="empty-year">В вибраному вами році немає витрат!</p>
        ) : (
          listItems.map((element) => {
            return (
              <CostItem
                key={element.id}
                date={element.date}
                descriptions={element.description}
                amount={element.amount}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default CostItems;
