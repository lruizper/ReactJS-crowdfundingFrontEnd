import "./ProjectPage.css";
import { useParams } from "react-router-dom";
import useProject from "../hooks/use-project";

import { AuthContext } from "../components/AuthProvider";
import CreatePledge from "../components/CreatePledge";

function ProjectPage() {
    // define user_id from local storage?
    // define project_id from the current project page
    const { id } = useParams();
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
            <h2>{project.title}</h2>
            {/* <h3>Created at: {project.date_created}</h3> */}
            <div className="projDescript">
            <img src={project.image} />
            <div className="projInfo">
            <p>Target: {project.goal}</p>
            <p>Created: {new Date(project.date_created).toLocaleDateString()}</p>
            <p>{project.description}</p>
            </div>
            </div>
            <h3>Pledges:</h3>
            <button>I'm ready to donate </button> {/* define state to true by default, then if true show the pledge form*/}
            <CreatePledge />
            <h3>Previous Supporters:</h3>
            {project.pledges.length === 0 ? <p>Be the first to contribute</p> : null}
            <ul> {project.pledges.map((pledge, key) => {
                return (
                    <li key={key}>{pledge.amount} from {pledge.supporter}
                    </li>
                );
            })}
            </ul>
        </div>
    );
}
export default ProjectPage
