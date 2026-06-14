import LoginStatus from "./auth/LoginStatus";
import TaskList from "./tasksList/TaskList";

const HomePage = () => {
  return (
    <>
      <LoginStatus />
      <TaskList />
    </>
  );
};

export default HomePage;
