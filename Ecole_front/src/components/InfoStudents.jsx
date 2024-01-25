import React, { useEffect, useState } from "react";
import {
  FaClock,
  FaGraduationCap,
  FaInfoCircle,
  FaUserGraduate,
} from "react-icons/fa";
import "../Styles/InfoStudents.css";
import axios from "axios";
import { url } from "../../url";
import { useParams } from "react-router-dom";
const InfoStudents = () => {
  const [stud, setStud] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const getClassesData = async () => {
      try {
        const { data } = await axios.get(`${url}/${id}`);
        await setStud(data);
      } catch (error) {
        console.log(error);
      }
    };
    getClassesData();
  }, []);
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
                filiere: {stud.name} <FaGraduationCap />
              </p>
            </li>
            <li>
              <p>
                nombres d'eleves : {stud.numberOfStudents} <FaUserGraduate />
              </p>
            </li>
            <li>
              <p>
                cree le : {stud.createdAt}
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
