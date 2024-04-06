import { Link } from "react-router-dom";
import "./navbar.scss";
import Logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faList } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={Logo} alt="Logo - HRnet" />
        <h1>HRnet</h1>
      </Link>
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faPlus} />
            <span>Create employee</span>
          </Link>
        </li>
        <li>
          <Link to="/employees">
            <FontAwesomeIcon icon={faList} />
            <span>Current employees</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
