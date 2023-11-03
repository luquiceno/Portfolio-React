import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import '../styles/ProjectDisplay.css';
import { Link } from 'react-router-dom';

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    
    <div className="project">
      <div className="project-links">
        <Link 
          className="back-button" 
          to="/projects"
          >&larr; <span>Back to Projects</span>
        </Link>
        <div>
          <a 
            className="demo"
            href={project.urlDemo}
            target="_blank" 
            rel="noreferrer noopener">&#10148; Demo 
          </a>
          <a 
            className="code"
            href={project.urlCodeView} 
            target="_blank" 
            rel="noreferrer noopener">&#60; View Code &#8725; &#62; 
          </a>
        </div>
      </div>

      <img src={project.image} className="project-image"/>
      <p>{project.description}</p>
      <div className="project-skills">
        {project.skills.map((skill, index) => {
          return (
            <div className="every-skill" key={index}>
                {skill}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default ProjectDisplay;