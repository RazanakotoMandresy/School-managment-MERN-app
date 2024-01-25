import React, { useEffect, useState } from "react";
import Students from "./Students";
import axios from "axios";
import { url } from "../../url";
import { useParams } from "react-router-dom";
import AddStudents from "../components/AddStudents";

const ClassesStudent = ({ open, handleClose }) => {
  const { id } = useParams();
  const [stud, setStud] = useState([]);
  const handleDeletes = async (id) => {
    try {
      setStud(stud.filter((student) => student._id !== id));
      await axios.delete(`${url}/students/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const getStudents = async () => {
      try {
        const { data } = await axios.get(`${url}/students/classe/${id}`);
        await setStud(data);
      } catch (error) {
        console.log(error);
      }
    };
    getStudents();
  }, []);

  return (
    <div className="LisStudents">
      {open ? (
        <div>
          <AddStudents handleClose={handleClose} />
        </div>
      ) : (
        <></>
      )}
      <ul>
        {stud.map((studs) => {
          const { _id } = studs;
          return (
            <li className="liStudents" key={_id}>
              <Students {...studs} handleDeletes={handleDeletes} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ClassesStudent;
