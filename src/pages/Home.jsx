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
        <h1 className="name">Hi, I&apos;m Lucia <br/>
          <span className="intro-role">Front-End Developer</span>
        </h1> 

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
        <h2 className="title-about">About Me</h2>  
        <p>I like challenges and learning from experts. For that reason I am enthusiastic about joining your team as a Frontend Developer, where I can learn and contribute 
           meaningfully to ongoing projects. <br/>
           With nearly five years of <Link to="/experience" className="project-experience"> work experience </Link>, in this new stage of my career I am eager to apply my skills
           to projects that prioritize user interfaces UI and user experience UX design, creating applications that are both visually appealing and intuitive to use.<br/>
           For some months I have been self-taught and I have been putting my knowledge into practice through the 
           development of different <Link to="/projects" className="project-link"> projects</Link> and making also some contributions to Open Source projects of my interest. 
           In both cases I have been able to gain experience in the following skills, as well as in the use of Material UI and TypeScript.
        </p> 
      </div>
      
      <div className="home-skills">
        <h2 className="title-skills">My Skills</h2>
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