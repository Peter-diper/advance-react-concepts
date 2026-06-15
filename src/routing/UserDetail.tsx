import { Link, useParams } from "react-router-dom";
import { users } from "./UserList";

const UserDetail = () => {
  const prams = useParams();
  const user = users.find((u) => u.id === Number(prams.id));

  return (
    <>
      <p>User: {user?.name}</p>
      <Link to="/"> Back to Home</Link>
    </>
  );
};

export default UserDetail;
