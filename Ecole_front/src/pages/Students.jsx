import { FiSettings } from "react-icons/fi";
import "../Styles/Classes.css";
import { url } from "../../url";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Students = ({ name, numberAtClass, profil, _id, handleDeletes }) => {
  return (
    <div className="studentsInfo">
      <ul>
        <li>
          <img src={`${url}/${profil}`} alt="image" />
        </li>
        <li className="StudentsButtons">
          <button>
            <Link to={`/students/${_id}`}>
              <FiSettings />
            </Link>
          </button>
          <button
            type="button"
            onClick={() => {
              handleDeletes(_id);
            }}
          >
            <FaTrashAlt />
          </button>
        </li>
        <li className="studentsTxt">nom de l'utilisateur : {name}</li>
        <li className="studentsTxt"> numero de l'eleve: {numberAtClass} </li>
      </ul>
    </div>
  );
};

export default Students;
