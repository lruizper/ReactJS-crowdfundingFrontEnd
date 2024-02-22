import "./LoginForm.css";
import { useState } from "react";
import postLogin from "../api/post-login";
import { useNavigate } from "react-router-dom";

function LogInForm() {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const handleChange = (e) => {
        const { id, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!credentials.username || !credentials.password) {
            alert("Please enter both a username and password");
            return;
        }
        if (credentials.username && credentials.password) {
            postLogin(credentials.username, credentials.password)
                .then((response) => {
                    // console.log(response);
                    window.localStorage.setItem("token", response.token);
                    navigate("/");
                })
                .catch((error) => {
                    alert("Invalid username or password");
                    console.error("Error:", error);
                })
                ;
        }
    };

    return (
        <form className="myForm">
            <div className="myInput">
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" onChange={handleChange} placeholder="Your username" />
            </div>
            <div className="myInput">
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" onChange={handleChange} placeholder="Your password" />
            </div>
            <button type="submit" onClick={handleSubmit}>Log In</button>
        </form>
    )
}
export default LogInForm;