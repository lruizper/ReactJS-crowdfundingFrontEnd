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
                        (<>
                            <li><Link className="navButton" to="/newproject" >Create Project</Link></li>
                            <li><Link className="navButton" to="/" onClick={handleLogout}>Log Out</Link></li>
                        </>) :
                        (<>
                            <li><Link className="navButton" to="/login">Log In</Link></li>
                            <li><Link className="navButton" to="/signin">Sign up</Link></li>
                        </>)
                    }
                </ul>
            </nav>
        </div>);
}
export default NavBar;