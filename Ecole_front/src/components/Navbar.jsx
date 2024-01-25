import React from "react";
import { FiHome, FiLogIn, FiPlusCircle, FiSearch } from "react-icons/fi";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
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
          <input
            type="search"
            name=""
            id=""
            placeholder="entrez vos vos recherches ici"
          />
          <button type="button">
            <FiSearch />
          </button>
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
