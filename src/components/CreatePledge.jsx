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
            "ammount": "",
            "comment": "",
            "annonymous": "false",
        }
    );
    
    const handleChange = (event) => {
        const { id, value } = event.target;
        setNewProj((prevPledge) => ({
            ...prevPledge,
            [id]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (project === "" ) {
            window.alert("Internal error detecting project");
            return;}
        if (supporter === "" ) {
            window.alert("Please log in to make a pledge");
            return;
        }
        if (newPledge.ammount === "" || newPledge.comment === "" ) {
            window.alert("Please fill in all fields");
            return;
        }
        try {
            await postPledge(newPledge);
            console.log(newPledge);
            navigate("/"); //set to navigate to the same page which should refresh, showing the new pledge
        }
        catch (error) {
            window.alert(error.message);
        }
        ;
    };
    // console.log(newPledge)
    return (
        <div>
            <form onSubmit={handleSubmit} className="myForm">
                <div className="myInput">
                    <label htmlFor="ammount">Ammount to donate: </label>
                    <input type="number" id="ammount" onChange={handleChange} />
                </div>
                <div className="myInput">
                    <label htmlFor="comment">Your message: </label>
                    <input type="text" id="comment" onChange={handleChange} placeholder="Encourage the team" />
                </div>
                <button type="submit" >Contribute</button>
            </form>
        </div>
    )
}

export default CreatePledge;