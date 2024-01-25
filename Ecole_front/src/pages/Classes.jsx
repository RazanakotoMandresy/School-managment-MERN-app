import React, { useState } from "react";
import { FiPlusSquare } from "react-icons/fi";
import "../Styles/Classes.css";
import "../Styles/addButton.css";
import ClassesStudent from "./ClassesStudent";
import InfoStudents from "../components/InfoStudents";

const Classes = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="infoClasses">
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
        <InfoStudents />
      </div>
      <ClassesStudent open={open} handleClose={handleClose} />
    </div>
  );
};

export default Classes;
