import React, { useState } from "react";
import { FiImage, FiX } from "react-icons/fi";
import "../Styles/addStudents.css";
import axios from "axios";
import { url } from "../../url";
import { Navigate, useParams } from "react-router-dom";
import { authentified } from "../../authentified";
const AddStudents = ({ handleClose }) => {
  const [name, setName] = useState("");
  const [imgStudent, setFile] = useState("");
  const [added, setAdded] = useState(false);
  const { id } = useParams();
  const createStudents = async (e) => {
    e.preventDefault();
    axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
    try {
      await axios.post(
        `${url}/students/${id}`,
        {
          name,
          imgStudent: imgStudent[0],
        },
        authentified
      );
      setName("");
      setFile("");
      setAdded(true);
    } catch (error) {
      console.log(error.response);
    }
  };
  if (added) {
    return <Navigate to={"/"} />;
  }
  return (
    <div>
      <div className="addSection">
        <button type="button" className="fermer" onClick={handleClose}>
          <FiX />
        </button>
        <form onSubmit={createStudents}>
          <h3>nom de l'eleve</h3>
          <input
            type="text"
            placeholder="le nom de l'eleve"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <h3>La photos de l'eleve</h3>
          <input
            type="file"
            name="imgStudent"
            id="images"
            onChange={(e) => {
              setFile(e.target.files);
            }}
          />
          <label htmlFor="images" className="imagesIcon">
            <FiImage />
          </label>
          <button type="submit" className="addStudButton">
            <p>Send</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudents;
