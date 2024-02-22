import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postSignup from "../api/post-signup";

function SigninForm() {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ username: "", password: "" , email: ""});
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
            postSignup(credentials.username, credentials.password)
                .then((response) => {
                    console.log(response);
                    navigate("/");
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
            <div className="myInput">
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" onChange={handleChange} placeholder="Your email" />
            </div>
            <button type="submit" onClick={handleSubmit}>Sign Up</button>
        </form>
    )
}
export default SigninForm;


// {
//     "username": "kaye",
//     "first_name": "Kaye",
//     "last_name": "Dante",
//     "email": "dante.kaye@fundassista.org",
//     "is_staff": true,
//    "password":"dante.kaye"
// }