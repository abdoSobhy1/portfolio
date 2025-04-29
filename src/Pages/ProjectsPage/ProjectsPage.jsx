import Container from "../../Components/UI/Container/Container";
import Project from "../../Components/UI/Project/Project";
import ProjectHeader from "../../Components/UI/ProjectHeader/ProjectHeader";

import classes from "./ProjectsPage.module.css";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Project 1",
      description: "This is a project description",
      img: "https://placehold.co/600x400/313131/white",
      link: "/project/project-1",
    },
    {
      title: "Project 2",
      description: "This is a project description",
      img: "https://placehold.co/600x400/313131/white",
      link: "/project/project-2",
    },
    {
      title: "Project 3",
      description: "This is a project description",
      img: "https://placehold.co/600x400/313131/white",
      link: "/project/project-3",
    },
    {
      title: "Project 4",
      description: "This is a project description",
      img: "https://placehold.co/600x400/313131/white",
      link: "/project/project-4",
    },
  ];

  return (
    <>
      <ProjectHeader projectName="My Projects" />;
      <section>
        <Container className={classes.projectsContainer}>
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </Container>
      </section>
    </>
  );
};

export default ProjectsPage;
