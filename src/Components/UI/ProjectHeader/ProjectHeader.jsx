import { useNavigate } from "react-router";
import Close from "../Close/Close";
import Container from "../Container/Container";
import ParHdr from "../Text/Paragarph/Header";
import Title from "../Text/Title/Title";

import classes from "./ProjectHeader.module.css";
import { useEffect } from "react";

const ProjectHeader = ({ projectName, projectCategory, to }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        navigate(-1);
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [navigate]);

  return (
    <div className={classes.projectHeader}>
      <Container className={classes.projectHeader}>
        <div className={classes.projectTitle}>
          <ParHdr fontSize={28}>{projectName}</ParHdr>
          <Title>{projectCategory}</Title>
        </div>
        <Close to={`${to ? to : "/"}`} />
      </Container>
    </div>
  );
};
export default ProjectHeader;
