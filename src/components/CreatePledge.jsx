import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useParams } from "react-router-dom";
import useProject from "../hooks/use-project";
import postPledge from "../api/post-pledge";

function CreatePledge() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [newPledge, setNewPledge] = useState(
        {
            "supporter": AuthContext.user_id, // need grab this from local storage
            "project": id, // need grab this from current project page
            "ammount": "",
            "comment": "",
            "annonymous": "false",
        }
    );
    console.log(newPledge)
    const handleChange = (event) => {
        const { id, value } = event.target;
        setNewProj((prevPledge) => ({
            ...prevPledge,
            [id]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (project_id === "" ) {
            window.alert("Internal error detecting project id");
            return;}
        if (user_id === "" ) {
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

    return (
        <div>
            <form className="myForm">
                <div className="myInput">
                    <label htmlFor="ammount">Ammount to donate: </label>
                    <input type="number" id="ammount" onChange={handleChange} />
                </div>
                <div className="myInput">
                    <label htmlFor="comment">Your message: </label>
                    <input type="text" id="comment" onChange={handleChange} placeholder="Encourage the team" />
                </div>
                <button type="submit" onClick={handleSubmit}>Contribute</button>
            </form>
        </div>
    )
}

export default CreatePledge;