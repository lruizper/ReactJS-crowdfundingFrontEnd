import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import "./HomePage.css";
// import { isFormElement } from "react-router-dom/dist/dom";

function HomePage() {
    const { projects, isLoading, error } = useProjects();
    if (isLoading) return (<>
    <h1>Projects</h1>
    <p>Hang on thight, we're loading your content</p>;
    </>)
    
    if (error) 
    return (<>
        <h1>Projects</h1>
        <p>Something went wrong: {error.message}</p>;
        </>)
    
    return (
        <>
        <h1>Projects</h1>
        <div id="project-list">
                        {projects.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
            })}
        </div>
        </>
    );
}
export default HomePage;