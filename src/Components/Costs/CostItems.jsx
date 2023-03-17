import "./CostItems.css";
import CostItem from "./CostItem";

function CostItems(props) {
  return (
    <div className="costs">
      <CostItem
        date={props.items[0].date}
        descriptions={props.items[0].description}
        amount={props.items[0].amount}
      />
      <CostItem
        date={props.items[1].date}
        descriptions={props.items[1].description}
        amount={props.items[1].amount}
      />
      <CostItem
        date={props.items[2].date}
        descriptions={props.items[2].description}
        amount={props.items[2].amount}
      />
    </div>
  );
}

export default CostItems;
