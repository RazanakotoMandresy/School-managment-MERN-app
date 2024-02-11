import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
const InputForSearch = () => {
  const [name, setName] = useState("");
  const nav = useNavigate();
  return (
    <>
      <input
        type="text"
        placeholder="entrez vos vos recherches ici"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          nav(`/students?name=${name}`);
        }}
      >
        <FiSearch />
      </button>
    </>
  );
};

export default InputForSearch;
