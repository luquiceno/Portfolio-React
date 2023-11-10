import Proj1 from "../assets/proj1.png";
import Proj2 from "../assets/proj2.png";
// import Proj3 from "../assets/proj3.png";
import Proj4 from "../assets/proj4.png";
import Proj5 from "../assets/proj5.png";
import Proj7 from "../assets/proj7.png"; 
import Proj9 from "../assets/proj9.png"; 
import Proj10 from "../assets/proj10.png"; 
import { 
  faCss3, 
  faGithubAlt, 
  faHtml5, 
  faReact, 
  faFigma, 
  faJs, 
  faNpm,
} from '@fortawesome/free-brands-svg-icons';


export const ProjectList = [
  {
    name: "Mozilla - PerfCompare",
    description: 
    "As an internship application process, I made a contribution to Mozilla's Open Source project PerfCompare, where given a new UX design some changes hat to be made to the interface. The changes suggested the addition of a new text, a new button, updating the background with an image and updating the dark mode design to a switch toggle.",
    image: Proj1,
    urlDemo:"https://perf.compare/",
    urlCodeView:"https://github.com/mozilla/perfcompare/pull/452",
    skills: ["JavaScript", "TypeScript", "Material UI", "React", "CSS", "Web Accessibility", "Git", "GitHub"]
  },

  {
    name: "My Portfolio",
    description: 
    "My portfolio was created for two purposes. The first was to show through practice what I have learned so far and secondly, to increase my knowledge of React among other skills, including some animations using framer-motion.",
    image: Proj4,
    urlDemo:"https://luportfolio.netlify.app",
    urlCodeView:"https://github.com/luquiceno/Portfolio-React",
    skills: ["React", "HTML", "CSS", "Responsive Design", "JavaScript", "Framer-motion", "GitHub", "Material UI" ],
  },

  {
    name: "Dashboard Extension",
    description: 
    "Personal Dashboard was a guided project to put into practice how to work with Asynchronous JavaScript and APIs. The application display the crypto currency information from the Dogecoin API, also reach out the current weather information from the Open Weather Map API and from the Unsplash API reach out the image that you can see in the background with its corresponding author.",
    image: Proj5,
    urlDemo:"https://dashboardextension.netlify.app",
    urlCodeView:"https://github.com/luquiceno/Dashboard-Extension",
    skills: ["Asynchronous JavaScript", "HTML", "CSS", "REST APIs", "GitHub"],
  },

  {
    name: "Deck War",
    description: 
    "Deck War was a guided project to put into practice how to work with Asynchronous JavaScript and APIs. The application is a Deck game between you and the computer. All the information display in the web application coming from the Deck API.",
    image: Proj10,
    urlDemo:"https://deckwar.netlify.app",
    urlCodeView:"https://github.com/luquiceno/Deck-War",
    skills: ["Asynchronous JavaScript", "HTML", "CSS", "REST APIs", "GitHub"],
  },

  {
    name: "JupyterHub",
    description: 
    "As an internship application process, I made some contributions to the JupyterHub Open Source project. The first contribution was to evaluate the accessibility the pages of the project using the extension WAVE tool and write a report identifying the accessibility problems encountered  and their possible solution. And the second contribution was to create a pytest plugin, install the plugin and run some test.",
    image: Proj2,
    urlDemo:"https://github.com/jupyterhub/outreachy/issues/38#issuecomment-1274454640",
    urlCodeView:"https://github.com/luquiceno/pytest-pluginlu",
    skills: ["Web Accessibility", "HTML", "Python", "Pytest", "Git", "GitHub"],
  },

  {
    name: "Rent Bike Website",
    description: 
    "Rent Bike is a guided project with the objective of level up my React skills, including learning about search/query parameters and authentication. As a practice a SPA (Single Page Application) is created, where you can rent a bike or bike implements that you need for your rides or tours, showing in detail information about each of the available bikes or implements. It also allows to manage a personal account to carry out the rental process.",
    image: Proj9,
    urlDemo:"https://vansrentwebsite.netlify.app",
    urlCodeView:"https://github.com/luquiceno/vansWebsite",
    skills: ["React", "HTML", "CSS", "JavaScript", "Firebase", "GitHub", "Figma" ],
  },

  {
    name: "Learning Website",
    description: 
    "Figma prototype of a web application to learn German. The idea with this project is to level up my frontend and backend skills.",
    image: Proj7,
    urlDemo:"https://www.figma.com/file/NMN47JAgcvUFDRpGR3JjEd/Dazu-Platform?type=design&t=PibK11utV0nvPIzx-6",
    urlCodeView:"https://github.com/luquiceno/vansWebsite",
    skills: ["Figma", "GitHub"],
  },

  {
    name: "Screenshot Web",
    description: 
    "Application that allows you to take screenshots and share them as an URL. The idea with this project is to level up my frontend and backend skills.",
    image: Proj9,
    urlDemo:"https://vansrentwebsite.netlify.app",
    urlCodeView:"https://github.com/luquiceno/vansWebsite",
    skills: ["Frontend", "Backend", "GitHub"],
  },
];

export const Technologies = [
  {
    icon: faReact,
    text: "React",
  },

  {
    icon: faHtml5,
    text: "HTML5",
  },

   {
    icon: faCss3,
    text: "CSS",
  },

  {
    icon: faJs,
    text: "JavaScript",
  },

  {
    icon: faGithubAlt,
    text: "GitHub",
  },

  {
    icon: faFigma,
    text: "Figma",
  }, 

  {
    icon: faNpm,
    text: "npm",
  }, 
 
];


