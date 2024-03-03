import "./ProjectPage.css";
import { useParams } from "react-router-dom";
import { useState, useContext } from "react";

import useProject from "../hooks/use-project";
import { AuthContext } from "../components/AuthProvider";
import CreatePledge from "../components/CreatePledge";

function ProjectPage() {
    // define user_id from local storage
    const currentUserId = JSON.parse(localStorage.getItem("user_id"));
    // define project_id from the current project page
    const { id } = useParams();

    //handle retreiving the project information
    const { project, isLoading, error } = useProject(id);
    if (isLoading) return (<>
        <p>Hang on thight, we're loading your content</p>;
    </>)
    if (error)
        return (<>
            <p>Something went wrong: {error.message}</p>;
        </>)
    return (
        <div className="projPage" >
            <div className="projDescript">
                <img src={project.image} />
                <div className="projInfo">
                    <h2>{project.title}</h2>
                    <p>Target: {project.goal}</p>
                    <p>Created: {new Date(project.date_created).toLocaleDateString()}</p>
                    <p>{project.description}</p>
                </div>
            </div>
            <div className="projPledges">
                <div>
                    <h3>Donate Now</h3>
                    {currentUserId === null ?
                        <p>Please log in to make a pledge</p>
                        :
                        (<><AuthContext.Provider value={{ user_id: currentUserId }}>
                            <CreatePledge />
                        </AuthContext.Provider></>)
                    }
                </div>
                <div>
                    {project.pledges.length === 0 ? <p>Be the first to contribute</p> : 
                    (<>
                    <h4>This project is receiving support</h4>
                    <ol> {project.pledges.map((pledge, key) => {
                        return (
                            <li key={key}>{pledge.amount}AUD from user_id: {pledge.supporter} with {pledge.comment}
                            </li>
                        );
                    })}
                    </ol>
                    </>)}
                </div>
            </div>
        </div>
    );
}
export default ProjectPage
