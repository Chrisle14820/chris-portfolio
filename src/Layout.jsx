import { Outlet } from "react-router";
import "./Layout.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import { FaGithub, FaLinkedin, FaBlog } from "react-icons/fa";

function Layout() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="container">
        <About />
        <Outlet />
      </main>
      <footer className="footer">
        <div>Made by Christopher Le</div>
        <div className="social-icons">
          <a href="http://www.linkedin.com/in/christopherle2">
            <FaLinkedin size={24} />
          </a>
          <a href="http://www.linkedin.com/in/christopherle2">
            <FaGithub size={24} />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Layout;
