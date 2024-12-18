import { useContext } from "react";
import userIcon from "../assets/user.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="space-x-5 text-gray-500">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="">
        <div className="flex gap-2 items-center">
          <div>
            {user && user?.email ? (
              <div className=" flex justify-center items-center gap-2">
                <img
                  className="w-10 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
                <p>{user.displayName}</p>
              </div>
            ) : (
              <img src={userIcon} alt="" />
            )}
          </div>
          {user && user?.email ? (
            <button onClick={logout} className="btn btn-neutral rounded-none">
              Log-Out
            </button>
          ) : (
            <Link to="/auth/login" className="btn btn-neutral rounded-none">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
