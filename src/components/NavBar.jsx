import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <div className="my-navBar">
            <nav>
                <ul>
                    <li><Link className="navButton" to="/">Home</Link></li>
                    <li><Link className="navButton" to="/about">About</Link></li>
                    <li><Link className="navButton" to="/contact">Contact</Link></li>
                    <li><Link className="navButton" to="/login"> LogIn</Link></li>
                    <li><Link className="navButton" to="/signin"> SignUp</Link></li>
                    <li><Link className="navButton" to="/createproject"> Create Project</Link></li>
                </ul>
            </nav>
        </div>);
}
export default NavBar;