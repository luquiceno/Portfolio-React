import pdf from '../docs/CV_Lucia_Mejia_Q.pdf';
import '../styles/Resume.css';

function Resume() {
  
  return (
    <div className="containerCv">
      <iframe
        className="docCv"
        src={pdf}
      /> 
    </div>      
  );
}

export default Resume;