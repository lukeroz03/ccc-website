import "./NavBar.css";
import { Outlet, Link } from "react-router-dom";
import Flasher from "./Flasher";

function NavBar() {
  return (
    <>
      <div className="navbar">
        <h1>
          <span className="terminal-prompt">:~$</span>
          Christendom College Coding Club<Flasher />
        </h1>
        <span className="topnav">
          <span className="terminal-prompt">:~$</span>
          <Link to="/">home</Link>
          <Link to="/members">
            <span className="dashes">--</span>members
          </Link>
          <Link to="/projects">
            <span className="dashes">--</span>projects
          </Link>
          <Link to="/constitution">
            <span className="dashes">--</span>constitution
          </Link>
        </span>
      </div>
      <div className="spacer"></div>
      <Outlet />
    </>
  );
}

export default NavBar;
