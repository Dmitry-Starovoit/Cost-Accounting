import DiagramBar from "./DiagramBar/DiagramBar";
import "./Diagram.css";

const Diagram = (props) => {
  const costAmountArray = props.dataSets.map((dataSet) => dataSet.value);

  const maxMounthCosts = Math.max(...costAmountArray);

  return (
    <div className="diagram">
      {props.dataSets.map((dataSet) => (
        <DiagramBar
          key={dataSet.id}
          value={dataSet.value}
          maxValue={maxMounthCosts}
          label={dataSet.label}
        />
      ))}
    </div>
  );
};

export default Diagram;
