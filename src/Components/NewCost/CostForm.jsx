import { useState } from "react";
import "./CostForm.css";

const CostForm = (props) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");

  const laberEventListener = (event) => {
    setName(event.target.value);
  };

  const numberEventListener = (event) => {
    setNumber(event.target.value);
  };

  const dateEventListener = (event) => {
    setDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const costData = {
      date: new Date(date),
      description: name,
      amount: number,
    };
    props.addCostHandler(costData);

    setName((event.target.value = ""));
    setNumber((event.target.value = ""));
    setDate((event.target.value = ""));
    console.log(costData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__control">
        <label htmlFor="">Назва</label>
        <input type="text" value={name} onChange={laberEventListener} />
        <label htmlFor="">Сума</label>
        <input
          type="number"
          value={number}
          onChange={numberEventListener}
          min={0.01}
          step={0.01}
        />
        <label htmlFor="">Дата</label>
        <input type="date" value={date} onChange={dateEventListener} />
        <div className="new-cost__actions">
          <button type="submit">Добавити розрахунок</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
