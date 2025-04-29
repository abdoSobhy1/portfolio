import { IoArrowForward } from "react-icons/io5";
import Card from "../card/Card";
import ParHdr from "../Text/Paragarph/Header";
import classes from "./ProjectCard.module.css";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <Card className={classes.projectCard}>
      <Link to={`/project/${project.title}`}>
        <img
          src={project.img}
          alt={project.title}
          className={classes.projectImage}
        />
        <div className={classes.projectTitleContainer}>
          <div className={classes.projectTitle}>
            <ParHdr>{project.title}</ParHdr>
            <IoArrowForward color="#ccc" />
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default ProjectCard;
