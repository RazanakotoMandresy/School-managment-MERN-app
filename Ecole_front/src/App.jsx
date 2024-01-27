import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import Classes from "./pages/Classes";
import Post from "./pages/Post";
import Register from "./pages/Register";
import SingleStudents from "./pages/SingleStudents";
import Login from "./pages/Login";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Post" element={<Post />} />
        <Route path="/classes/:id" element={<Classes />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/students/:id" element={<SingleStudents />} />
      </Routes>
    </div>
  );
};

export default App;
