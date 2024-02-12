import React, { useEffect, useState } from "react";
import {
  FaClock,
  FaGraduationCap,
  FaInfoCircle,
  FaUserGraduate,
} from "react-icons/fa";
import "../Styles/InfoStudents.css";

const InfoStudents = ({ name, numberOfStudents, createdAt }) => {
  return (
    <>
      <div className="dropdown">
        <span>
          <FaInfoCircle />
          Information sur la classes
        </span>
        <div className="dropdown-content">
          <ul>
            <li>
              <p>
                filiere: {name} <FaGraduationCap />
              </p>
            </li>
            <li>
              <p>
                nombres d'eleves : {numberOfStudents} <FaUserGraduate />
              </p>
            </li>
            <li>
              <p>
                cree le : {createdAt}
                <FaClock />
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default InfoStudents;
