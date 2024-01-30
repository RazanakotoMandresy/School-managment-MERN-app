import React, { useState } from "react";
import "../Styles/Post.css";
import { FiSend } from "react-icons/fi";
import axios from "axios";
import { url } from "../../url";
import { Navigate } from "react-router-dom";
import { authentified } from "../authentified";
const Post = () => {
  const [name, setName] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [user, setUser] = useState({});
  const postClasses = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${url}`, { name }, authentified);
      setRedirect(true);
    } catch (error) {
      console.log(error);
    }
  };
  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="Post">
      <h3>Ajout d'un classes ?</h3>
      <form onSubmit={postClasses}>
        <h4>Nom de la filiere </h4>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom de la filiere"
        />
        <button type="submit">
          <FiSend />
        </button>
      </form>
    </div>
  );
};

export default Post;
