import '../styles/Home.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Technologies } from '../helpers/ProjectList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef } from "react";

function Home() {

  const parentDrag = useRef();

  return (
    <div className="home">
      <div className="intro">
        <h2 className="name">Hi, I&apos;m Lucia <br/>
          <span className="intro-role">Front-End Developer</span>
        </h2> 

        <motion.div className="box-image1" ref={parentDrag}>    
          <motion.div 
            className="box-image2" 
            drag  
            title="drag it"
            dragConstraints={parentDrag}
            dragSnapToOrigin={true}
          >
          </motion.div>
        </motion.div> 
      </div>

      <div className="about-text">
        <h2>About Me</h2>  
        <p>As a frontend developer in training, I like challenges and learn from the experts. 
           For that reason I would like to be part of your team, learn and contribute on the projects
           the team or the company is working on. <br/>
           I have almost five years of <Link to="/experience" className="project-experience"> work experience </Link> and although it was not as a Frontend Developer, I know
           that these skills are transferable to this new role that I want to fill.<br/>
           For some months I have been self-taught and I have been putting my knowledge into practice through the 
           development of different <Link to="/projects" className="project-link"> projects</Link> and making also some contributions to Open Source projects of my interest. 
           In both cases I have been able to gain experience in the following skills, as well as in the use of Material UI and TypeScript.
        </p>  
      </div>
      
      <div className="home-skills">
        <h2 className="title">My Skills</h2>
        <div className="technologies">
          {Technologies.map((technologie, id) => (
            <motion.div 
              key={id}
              className="tech-box"
              whileHover={{ scale: 1.2 }} 
            >
              <span className="tech-name">
                <FontAwesomeIcon icon={technologie.icon} className="tech-image" title={technologie.text} />
                  {technologie.text} 
              </span>
            </motion.div>
            
          ))}
        </div>
      </div>  

    </div>
  )
}

export default Home;