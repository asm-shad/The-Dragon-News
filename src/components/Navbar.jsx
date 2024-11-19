import userIcon from "../assets/user.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="space-x-5 text-gray-500">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="">
        <div className="flex gap-2 items-center">
          <img src={userIcon} alt="" />
          <Link to="/auth/login" className="btn btn-neutral rounded-none">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
