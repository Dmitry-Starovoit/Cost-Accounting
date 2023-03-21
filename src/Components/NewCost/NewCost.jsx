import CostForm from "./CostForm/CostForm";
import "./NewCost.css";

const NewCost = (props) => {
  return (
    <div className="new-cost">
      <CostForm addCostHandler={props.addCostHandler} />
    </div>
  );
};

export default NewCost;
