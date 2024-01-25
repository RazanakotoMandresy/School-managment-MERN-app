import React, { useState } from "react";
import "../Styles/Register.css";
import { url } from "../../url";
import axios from "axios";
import { Link } from "react-router-dom";
const Login = () => {
  const [passwords, setPasswords] = useState("");
  const [email, setEmail] = useState("");
  const login = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${url}/auth/login`, {
        email,
        password: passwords,
      });
      await localStorage.setItem("token", data.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register">
      <h1>connexion</h1>
      <form action="" onSubmit={login}>
        <h4>email</h4>
        <input
          type="email"
          name="email"
          placeholder="votre addresse email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <h4>mots de passes</h4>
        <input
          type="password"
          name="password"
          value={passwords}
          onChange={(e) => {
            setPasswords(e.target.value);
          }}
          placeholder="mots de passes"
        />
        <button> S'inscrire </button>
      </form>
      <p>
        Pas encore de comptes?
        <Link to={"/Register"}> Cliquez pour vous inscrires </Link>
      </p>
    </div>
  );
};

export default Login;
