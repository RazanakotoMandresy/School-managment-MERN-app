import React, { useEffect, useState } from "react";
import "../Styles/Home.css";
import axios from "axios";
import ClassesContent from "./ClassesContent";
import { url } from "../../url";
import { authentified } from "../authentified";
const Home = (_) => {
  const [classes, setClasses] = useState([]);
  const handleDelete = async (_id) => {
    try {
      setClasses(classes.filter((classe) => classe._id !== _id));
      await axios.delete(`${url}/${_id}`, authentified);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(url);
        await setClasses(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div className="Home">
      <ul>
        {classes.map((classe) => {
          const { _id } = classe;
          return (
            <li key={_id}>
              <ClassesContent {...classe} handleDelete={handleDelete} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
