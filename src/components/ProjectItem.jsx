import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

function ProjectItem({ image, name, typeProject, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="project-item"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h2> {name} </h2>
      <p> {typeProject} </p>
    </div>
  );
}

ProjectItem.propTypes = {
  image: PropTypes.any,
  name: PropTypes.string,
  typeProject: PropTypes.string,
  id: PropTypes.number
}  

export default ProjectItem;

