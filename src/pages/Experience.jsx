import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from "@material-ui/icons/Work";
import { ExperienceList } from '../helpers/ExperienceList';

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#1F4172">
        {ExperienceList.map((experience, id) => (
          <VerticalTimelineElement
            key={id}
            className="vertical-timeline-element--work"
            date={experience.date}
            iconStyle={{ background: "#F6F1EE", color: "#ec720f" }}
            icon={<WorkIcon />}
          >
            <h3 
              className="vertical-timeline-element-title" style={{color:"#1F4172"}} 
            >
              {experience.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={{color:"#ec720f"}}>
              {experience.place} - {experience.location}
            </h4>
            <p>{experience.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  )
}

export default Experience; 

