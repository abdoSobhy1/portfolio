import Card from "../card/Card";
import ParHdr from "../Text/Paragarph/Header";
import classes from "./Project.module.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Title from "../Text/Title/Title";

const Project = ({ project }) => {
  return (
    <Card className={classes.projectCard}>
      <div className={classes.imgContainer}>
        <img
          src={project.img}
          alt={project.title}
          className={classes.projectImage}
        />
      </div>
      <div className={classes.projectTitleContainer}>
        <div className={classes.projectTitle}>
          <ParHdr>{project.title}</ParHdr>
          <Title>{project.description}</Title>
        </div>
        <Button to={project.link} />
      </div>
    </Card>
  );
};

export default Project;
