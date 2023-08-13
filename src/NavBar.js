import "./navBar.css";
import { Outlet, Link } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <h1>Christendom College Coding Club</h1>
            <span className="topnav">
                <Link to="/">Home </Link>
                <Link to="/members">Members </Link>
                <Link to="/projects">Projects </Link>
                <Link to="/constitution">Constitution </Link>
            </span>
	    <Outlet />
        </>
    )
}

export default NavBar;
