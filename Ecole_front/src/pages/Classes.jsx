import React, { useEffect, useState } from "react";
import { FiPlusSquare } from "react-icons/fi";
import "../Styles/Classes.css";
import "../Styles/addButton.css";
import ClassesStudent from "./ClassesStudent";
import InfoStudents from "../components/InfoStudents";
import { useParams } from "react-router-dom";
import axios from "axios";
import { url } from "../../url";
import { useAppContext } from "../App";

const Classes = () => {
  const { idConnected } = useAppContext();
  const [stud, setStud] = useState({});
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
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
    <div>
      <div className="infoClasses">
          {stud.createdBy == idConnected ? (
            <div className="addButton">
            <button
              type="button"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <FiPlusSquare />
            </button>
            </div>
          ) : (
            <></>
          )}
        <InfoStudents {...stud} />
      </div>
      <ClassesStudent open={open} handleClose={handleClose} />
    </div>
  );
};

export default Classes;
