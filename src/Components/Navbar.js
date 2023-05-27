import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.accessToken) {
        toast.error("User Not Found!!!")
      navigate("/");
    }else{
        toast("You are already Logged in")
    }
  };

  return (
    <nav>
      <div className="logo">Header</div>
      <ul>
        <li>
          <Link to="/">Signup</Link>
        </li>
        <li>
          <Link to="/profile" onClick={handleProfileClick}>
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

