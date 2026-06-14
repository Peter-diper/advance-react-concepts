import useUserStore from "./soter";

const LoginStatus = () => {
  const { user, login, logout } = useUserStore();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => login("rasool@gmail.com")} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
