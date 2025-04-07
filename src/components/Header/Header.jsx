import "./Header.css";
import { VscRepo } from "react-icons/vsc";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router";

function Header() {
  return (
    <div className="header-container">
      <nav className="nav-container">
        <ul className="nav-body">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <VscRepo />
              <span>Overview</span>
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/repositories">
              <VscRepo />
              <span>Repositories</span>
            </Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              <CiMail />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
