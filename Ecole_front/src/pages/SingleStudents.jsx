import React, { useEffect, useState } from "react";
import "../Styles/SingleStudents.css";
import { FiChevronDown, FiX } from "react-icons/fi";
import axios from "axios";
import { url } from "../../url";
import { Navigate, useParams } from "react-router-dom";

const SingleStudents = ({}) => {
  const [stud, setStud] = useState({});
  const [close, setClose] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const getSingleStudents = async () => {
      try {
        const { data } = await axios.get(`${url}/students/${id}`);
        await setStud(data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    getSingleStudents();
  }, []);
  const handleClose = () => {
    setClose(true);
  };
  if (close) {
    return <Navigate to={`/Classes/${stud.classSchool}`}></Navigate>;
  }
  return (
    <div className="singleStudent">
      <div className="head">
        <button
          onClick={() => {
            handleClose();
            console.log(close);
          }}
        >
          <FiX />
        </button>
        <p> {stud.name} </p>
      </div>

      <div className="content">
        <h3>Eleve de la classe: {stud.classesName} </h3>
        <h3> numero : {stud.numberAtClass} </h3>
        <img src="" alt="" />
        <button className="more">
          <FiChevronDown />
        </button>
      </div>
    </div>
  );
};

export default SingleStudents;
