import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postProject from "../api/post-project";

function CreateProject() {
    const navigate = useNavigate();
    const [newProj, setNewProj] = useState(
        {
            "title": "",
            "description": "",
            "goal": "",
            "image": "https://via.placeholder.com/300.jpg",
            "is_open": true,
            "date_created": new Date().toISOString(),
        }
    );

    const handleChange = (e) => {
        const { id, value } = e.target;
        setNewProj((prevProject) => ({
            ...prevProject,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if (!newProj.title || !newProj.description || !newProj.goal) {
        //     alert("One or more fields are empty! Please fill them out.");
        //     return;
        // }
        try {
            await postProject(newProj);
            console.log(newProj);
            navigate("/");
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
                    <label htmlFor="title">Project title: </label>
                    <input type="text" id="title" onChange={handleChange} placeholder="Name your new project" />
                </div>
                <div className="myInput">
                    <label htmlFor="description">Project description: </label>
                    <input type="text" id="text" onChange={handleChange} placeholder="Describe your project" />
                </div>
                <div className="myInput">
                    <label htmlFor="goal">Project goal: </label>
                    <input type="number" id="goal" onChange={handleChange} placeholder="Your target" />
                </div>
                <div className="myInput">
                    <label htmlFor="image">Project image: </label>
                    <input type="text" id="image" onChange={handleChange} placeholder="Image URL" />

                </div>
                <br />
                <button type="submit" onClick={handleSubmit}>Submit New Project</button>
            </form>
        </div>
    )
}

export default CreateProject;