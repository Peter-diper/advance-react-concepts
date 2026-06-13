import { useReducer, useState } from "react";
import counterReducer from "./reducers/counterReudcer";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      Counter ({state})
      <button
        onClick={() => dispatch({ type: "inc" })}
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "reset" })}
        className="btn btn-primary mx-1"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
