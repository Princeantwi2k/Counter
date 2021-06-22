import React, { useState } from "react";

const FunctionComponent = () => {
  const [count, updatecount] = useState(0);
  const handledecreament = () => {
    updatecount(count - 1);
  };
  const handleIncreament = () => {
    updatecount(count + 1);
  };

  return (
    <div>
      <button className="bnt" onClick={handledecreament}>
        Decrement
      </button>
      <h3>FunctionCount {count}</h3>
      <button className="bnt" onClick={handleIncreament}>
        Increment
      </button>
    </div>
  );
};

export default FunctionComponent;
