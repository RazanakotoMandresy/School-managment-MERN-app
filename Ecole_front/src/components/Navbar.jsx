import React from "react";
import { FiHome, FiLogIn, FiPlusCircle } from "react-icons/fi";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import InputForSearch from "./InputForSearch";
const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
          <li>
            <Link to={"/"}>
              <FiHome />
            </Link>
          </li>
          <li>
            <Link to={"/Post"}>
              <FiPlusCircle />
            </Link>
          </li>
          <li className="search">
            <InputForSearch />
          
          </li>
          <li className="right">
            <Link to={"/Login"}>
              <FiLogIn />
            </Link>
          </li>
        </ul>
    </div>
  );
};

export default Navbar;
