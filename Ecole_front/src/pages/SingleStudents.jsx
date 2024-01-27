import React from "react";
import "../Styles/SingleStudents.css";
import { FiChevronDown, FiX } from "react-icons/fi";

const SingleStudents = () => {
  return (
    <div className="singleStudent">
      <div className="head">
        <button>
          <FiX />
        </button>
        <p>eleve de la classe </p>
      </div>
      <div className="content">
        <h3>Eleve de la classe: </h3>
        <h3> numero : numero </h3>
        <img src="" alt="" />
        <button className="more">
          <FiChevronDown />
        </button>
      </div>
    </div>
  );
};

export default SingleStudents;
