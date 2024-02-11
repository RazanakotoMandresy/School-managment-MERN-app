import { FiSettings } from "react-icons/fi";
import "../Styles/Classes.css";
import { url } from "../../url";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";  
import { useAppContext } from "../App";


const Students = ({
  name,
  numberAtClass,
  profil,
  _id,
  handleDeletes,
  IdCreator,
}) => {
    const { idConnected } = useAppContext();
  return (
    <div className="studentsInfo">
      <ul> 
        <li>
          <img src={`${url}/${profil}`} alt="image" />
        </li>
        {idConnected == IdCreator ? (
          <li>
            <button
              type="button"
              onClick={() => {
                handleDeletes(_id);
              }}
              className="StudentsButtons"
            >
              <FaTrashAlt />
            </button>
            <Link to={`/students/${_id}`} className="studentsLink">
              <FiSettings />
            </Link>
          </li>
        ) : (
          <></>
        )}

        <li className="studentsTxt">nom de l'utilisateur : {name}</li>
        <li className="studentsTxt"> numero de l'eleve: {numberAtClass} </li>
      </ul>
    </div>
  );
};

export default Students;
