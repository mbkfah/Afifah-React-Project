import { useState } from "react";

export const Counter = () => {
  const [state, setState] = useState(0);

  return (
    <div>
      <p> Counter : {state} </p>
      <button
        onClick={() => {
          setState(state + 1);
        }}
        className="bg-blue-500 rounded"
      >
        Increase
      </button>
    </div>
  );
};
