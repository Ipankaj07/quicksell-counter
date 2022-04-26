import React, { useState, useEffect } from "react";
import "./counter.css";

function Counter() {
  const [count, setCount] = useState(1);
  const [max, setMax] = useState(1000);
  const [maxValue, setMaxValue] = useState("");

  useEffect(() => {
    if (maxValue > 1000) {
      setMaxValue(1000);
    }
  }, [maxValue]);

  const increment = () => {
    if (count < max) {
      setCount((prevCount) => +prevCount + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => +prevCount - 1);
    }
  };

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const handleMaxChange = (e) => {
    setMax(e.target.value);
  };

  return (
    <div className="main__div">
      <div className="counter__div">
        <div className="counter__buttons minus" onClick={decrement}>
          <div>-</div>
        </div>
        <div className="counter__value">
          <div> {count}</div>{" "}
        </div>
        <div className="counter__buttons plus" onClick={increment}>
          <div>+</div>
        </div>
      </div>
      <div className="counter-input">
        <input
          type="number"
          onChange={handleChange}
          placeholder="Initial Value"
        />
        <input
          type="number"
          onChange={handleMaxChange}
          placeholder="Max Value"
        />
      </div>
    </div>
  );
}

export default Counter;
