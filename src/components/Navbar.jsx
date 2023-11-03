import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import { BurgerClose } from 'react-burger-icons';

function Navbar() {
  
  const [isClosed, setIsClosed] = useState(false);
 
  return (
    <div className="navbar" id={isClosed ? "open" : "close"}>

      <div className="toggleButton">
        <button
          onClick={() => setIsClosed(!isClosed)}
          style={{
            width: "50px",
            height: "50px",
            display: "grid",
            placeItems: "center",
          }}
        >
          <BurgerClose isClosed={isClosed} />
        </button>
      </div>
         
      <div className="links">
        <NavLink 
            to="/"
            className={({isActive}) => isActive ? "active-link" : null}
          >
            Home
        </NavLink>
        <NavLink 
            to="/projects"
            className={({isActive}) => isActive ? "active-link" : null}
          >
            Projects
        </NavLink>
        <NavLink 
            to="/experience"
            className={({isActive}) => isActive ? "active-link" : null}
          >
            Experience
        </NavLink>
        <NavLink 
            to="/resume"
            className={({isActive}) => isActive ? "active-link" : null}
          >
            Resume
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar;