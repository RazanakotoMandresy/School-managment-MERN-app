import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../../url";
import { useLocation } from "react-router-dom";
import Students from "./Students";
const SearchResult = () => {
  const [stud, setStud] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("name");
  useEffect(() => {
    const results = async () => {
      try {
        const { data } = await axios.get(`${url}/students?name=${query}`);
        setStud(data);
      } catch (error) {
        console.log(error);
      }
    };
    results();
  }, []);
  return (
    <div>
      {stud.map((studs) => {
        return <Students {...studs} key={studs._id} />;
      })}
    </div>
  );
};

export default SearchResult;
