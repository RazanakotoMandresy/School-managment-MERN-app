import React from "react";
import { FiMoreHorizontal, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../Styles/Home.css";
import { useAppContext } from "../App";

const ClassesContent = ({
  name,
  numberOfStudents,
  createdAt,
  _id,
  handleDelete,
  createdBy,
}) => {
  const { idConnected } = useAppContext();
  return (
    <div>
      <h3>Nom de la classe : {name} </h3>
      <p>nombres d'eleves : {numberOfStudents} </p>
      <ul className="but">
        <li className="butli">
          {idConnected == createdBy ? (
            <button type="button" onClick={() => handleDelete(_id)}>
              <FiTrash2 />
            </button>
          ) : (
            <></>
          )}
        </li>
        <li className="butli2">
          <Link to={`/Classes/${_id}`}>
            <FiMoreHorizontal />
          </Link>
        </li>
      </ul>
      <p>classe cree le {createdAt}</p>
    </div>
  );
};

export default ClassesContent;
