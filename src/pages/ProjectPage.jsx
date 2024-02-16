import { oneProject } from "../data";
// import "./ProjectPage.css";

function ProjectPage() {
    return (
        <div>
            <h2>{oneProject.title}</h2>
            <h3>Created at: {oneProject.date_created}</h3>
            <img src={oneProject.image} />
            <h3>Goal: {oneProject.goal}</h3>
            <h4>{`Status: ${oneProject.is_open}`}</h4>
            <p>{oneProject.description}</p>

            <h3>Pledges:</h3>
            <ul>
                {oneProject.pledges.map((pledge, key) => {
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
