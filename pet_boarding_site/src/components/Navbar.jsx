
import {Link} from "react-router-dom"
import '../App.css'
export const Nabar = () => {
  return (
    <div className="navdiv">
      <Link to="/" id="links">
        home
      </Link>
      <Link to="/listing/:id" id="links">
        Entities
      </Link>
      <Link to="/listing" id="links">
        Create Entities
      </Link>
    </div>
  );
};
