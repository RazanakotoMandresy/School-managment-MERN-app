import React, { useState } from "react";
import "../Styles/Register.css";
import { url } from "../../url";
import axios from "axios";
import { Link } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [passwords, setPasswords] = useState("");
  const [email, setEmail] = useState("");
  const register = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${url}/auth/register`, {
        name,
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
      <h1>Inscription</h1>
      <form action="" onSubmit={register}>
        <h4>nom</h4>
        <input
          type="text"
          placeholder="entrez votre nom"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
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
        vous avez deja un comptes ?
        <Link to={"/Login"}> Cliquez pour vous inscrires </Link>
      </p>
    </div>
  );
};

export default Register;
