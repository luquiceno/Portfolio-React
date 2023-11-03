import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import '../styles/Projects.css';

function Projects() {
  return (
    <div className="projects">
      <div className="projects-list">
        {ProjectList.map((project, idx, index) => {
          return (
            <ProjectItem 
              key={index}
              id={idx} 
              name={project.name} 
              image={project.image} 
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
