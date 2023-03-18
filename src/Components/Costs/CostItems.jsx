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

  const listItems = props.items.filter((element) => {
    return element.date.getFullYear().toString() === selectedYear;
  });
  return (
    <div>
      <div className="costs">
        <CostsFilter selectedYear={selectedYear} getYearValue={getYearValue} />
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
