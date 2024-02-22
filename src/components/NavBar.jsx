import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";
import FooterBar from "./FooterBar";

function NavBar() {
    return (
        <div className="my-navBar">
            <nav>
                <ul>
                <li><Link className="navButton" to="/">Home</Link></li>
                <li><Link className="navButton" to="/about">About</Link></li>
                <li><Link className="navButton" to="/contact">Contact</Link></li>
                <li><Link className="navButton" to= "/login"> LogIn</Link></li>
                <li><Link className="navButton" to= "/signin"> SignUp</Link></li>
                </ul>
            </nav>
            <Outlet />
            <FooterBar />
        </div>);
}
export default NavBar;