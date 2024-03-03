import "./LoginForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import postLogin from "../api/post-login";
import { useAuth } from "../hooks/use-auth";


function LogInForm() {
    const navigate = useNavigate();
    const {auth, setAuth}=useAuth();
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const handleChange = (e) => {
        const { id, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!credentials.username || !credentials.password) {
            alert("Please enter both username and password");
            return;
        }
        if (credentials.username && credentials.password) {
            postLogin(credentials.username, credentials.password)
                .then((response) => {
                    window.localStorage.setItem("token", response.token);
                    window.localStorage.setItem("user_id", response.user_id);
                    setAuth({token: response.token,
                        user_id: response.user_id});
                    console.log(response);
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