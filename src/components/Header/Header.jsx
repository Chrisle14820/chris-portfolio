import "./Header.css";
import { VscRepo } from "react-icons/vsc";

function Header() {
  return (
    <div className="header-container">
      <nav className="nav-container">
        <ul className="nav-body">
          <li className="nav-item">
            <a className="nav-link" href="/">
              <VscRepo />
              <span>Overview</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="repositories">
              <VscRepo />
              <span>Repositories</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact">
              <VscRepo />
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
