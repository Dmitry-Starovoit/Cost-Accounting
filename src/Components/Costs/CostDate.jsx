import "./CostDate.css";

function CostDate(props) {
  //const date = new Date();

  const day = props.date.toLocaleString("uk-UA", {
    day: "2-digit",
  });
  const mounth = props.date.toLocaleString("uk-UA", {
    month: "long",
  });
  const year = props.date.getFullYear();
  return (
    <div className="cost-date">
      <div className="cost-date__mounth">{mounth}</div>
      <div className="cost-date__year">{year}</div>
      <div className="cost-date__day">{day}</div>
    </div>
  );
}

export default CostDate;
