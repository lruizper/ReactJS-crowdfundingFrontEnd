import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useParams } from "react-router-dom";
import postPledge from "../api/post-pledge";

function CreatePledge() {
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    const { id } = useParams();
    const [newPledge, setNewPledge] = useState(
        {
            "supporter": authContext.user_id, // need grab this from local storage
            "project": Number(id), // need grab this from current project page
            "amount": "",
            "comment": "",
            "anonymous": "false",
        }
    );
    
    const handleChange = (event) => {
        const { id, value } = event.target;
        setNewPledge((prevPledge) => ({
            ...prevPledge,
            [id]: value,
        }));
    };

    const handleSubmit = async (event) => {
        const project = newPledge.project;
        const supporter = newPledge.supporter;
        event.preventDefault();
        if (project === null || supporter === null) {
            window.alert("Internal error detecting project or user, please try again later.");
            return;}
        if (newPledge.amount === "" || newPledge.comment === "" ) {
            window.alert("Please fill in all fields");
            return;
        }
        if (newPledge.amount <= 0) {
            window.alert("Pledge amount must be greater than 0");
            return;
        }
        try {
            await postPledge(newPledge);
            console.log(newPledge);
            window.location.reload();
        }
        catch (error) {
            window.alert(error.message);
        }
        ;
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="myForm">
                <div className="myInput">
                    <label htmlFor="amount">Ammount to donate: </label>
                    <input type="number" id="amount" onChange={handleChange} min="1"/>
                </div>
                <div className="myInput">
                    <label htmlFor="comment">Your message: </label>
                    <input type="text" id="comment" onChange={handleChange} placeholder="Encourage the team" />
                </div>
                <button type="submit" className="navButton" >Contribute</button>
            </form>
        </div>
    )
}

export default CreatePledge;