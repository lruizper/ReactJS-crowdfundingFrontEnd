import { Link } from "react-router-dom";
import "./NavBar.css";
import { useAuth } from "../hooks/use-auth";

function NavBar() {
    const { auth, setAuth } = useAuth();

    const handleLogout = () => {
        window.localStorage.removeItem("token");
        setAuth({ token: null });
    };

    return (
        <div className="my-navBar">
            <nav>
                <ul>
                    <li><Link className="navButton" to="/">Home</Link></li>
                    <li><Link className="navButton" to="/about">About</Link></li>
                    <li><Link className="navButton" to="/contact">Contact</Link></li>
                    {auth.token ?
                        (<Link className="navButton" to="/" onClick={handleLogout}>Log Out</Link>) :
                        (<Link className="navButton" to="/login">Log In</Link>)
                    }
                    <li><Link className="navButton" to="/signin">Register</Link></li>
                    <li><Link className="navButton" to="/createproject"> Create Project</Link></li>
                </ul>
            </nav>
        </div>);
}
export default NavBar;