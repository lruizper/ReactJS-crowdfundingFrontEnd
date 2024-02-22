import { useParams } from "react-router-dom";
import useProject from "../hooks/use-project";
import "./ProjectPage.css";

function ProjectPage() {
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
