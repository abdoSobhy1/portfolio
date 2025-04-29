import Card from "../../UI/card/Card";
import Title from "../../UI/Text/Title/Title";
import ParHdr from "../../UI/Text/Paragarph/Header";
import Button from "../../UI/Button/Button";

import classes from "./projectsCard.module.css";

const ProjectsCard = () => {
  return (
    <Card className={classes.projectsCard}>
      <Title>Projects</Title>
      <ParHdr fontSize={26}>Check out my projects!</ParHdr>
      <Button to="/projects" className={classes.btn} />
    </Card>
  );
};

export default ProjectsCard;
