import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <div className="my-navBar">
            <nav>
                <ul>
                <li><Link className="navButton" to="/">Home</Link></li>
                <li><Link className="navButton" to="/project">Project</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>);
}
export default NavBar;