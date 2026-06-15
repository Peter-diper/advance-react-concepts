import useCounterStore from "./store";


const Counter = () => {
  const { counter: state, increase, reset } = useCounterStore();
  return (
    <div>
      Counter ({state})
      <button onClick={() => increase()} className="btn btn-primary mx-1">
        Increment
      </button>
      <button onClick={() => reset()} className="btn btn-primary mx-1">
        Reset
      </button>
    </div>
  );
};
export default Counter;
