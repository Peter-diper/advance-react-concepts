import useCounterStore from "./counter/store";

const NavBar = () => {
  console.log("Rerendering navbar");

  // const { tasks } = useContext(TaskContext);
  const counter = useCounterStore((s) => s.counter);
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
    </nav>
  );
};

export default NavBar;
