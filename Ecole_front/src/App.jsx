import React, { createContext, useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import Classes from "./pages/Classes";
import Post from "./pages/Post";
import Register from "./pages/Register";
import SingleStudents from "./pages/SingleStudents";
import Login from "./pages/Login";
import SearchResult from "./pages/SearchResult";
import axios from "axios";
import { url } from "../url";
import { authentified } from "./authentified";
export const CreatesAppContext = createContext();
export const useAppContext = () => useContext(CreatesAppContext);
const App = () => {
  const [idConnected, setIdConnected] = useState();
  const getWhoIsConnected = async () => {
    try {
      const { data } = await axios.get(`${url}/auth`, authentified);
      await setIdConnected(data.userId);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWhoIsConnected();
  }, []);
  return (
    <CreatesAppContext.Provider value={{ idConnected }}>
      <Navbar />
      <Routes>
        <Route path="/students" element={<SearchResult />} />
        <Route path="/" element={<Home />} />
        <Route path="/Post" element={<Post />} />
        <Route path="/classes/:id" element={<Classes />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/students/:id" element={<SingleStudents />} />
      </Routes>
    </CreatesAppContext.Provider>
  );
};

export default App;
