import { useParams } from "react-router";
import classes from "./ProjectPage.module.css";
import ImageCard from "../../Components/UI/imageCard/ImageCard";
import Container from "../../Components/UI/Container/Container";
import InfoSection from "../../Components/ProjectPage/Info/InfoSection";
import ContentSection from "../../Components/ProjectPage/ContentSection/ContentSection";
import ProjectHeader from "../../Components/UI/ProjectHeader/ProjectHeader";

const ProjectPage = () => {
  const params = useParams();

  const projectInfo = [
    {
      title: "Date",
      description: ["2021"],
    },
    {
      title: "Client",
      description: ["Client Name"],
    },
    {
      title: "Category",
      description: ["Website"],
    },
    { title: "Stack", description: ["React", "Node", "Express", "MongoDB"] },
    {
      title: "SEO",
      description: ["Optimized"],
    },
  ];

  const projectSpecs = [
    {
      title: "Description",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium iste excepturi consectetur ut! Adipisci deserunt, natus explicabo eius est delectus cupiditate, aspernatur provident corrupti sit molestias! Iure sit eos itaque fugit libero maiores reprehenderit nesciunt, minima doloribus quo rem totam commodi fugiat aut ullam vel esse quod nam quam obcaecati.",
    },
    {
      title: "Context",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium iste excepturi consectetur ut! Adipisci deserunt, natus explicabo eius est delectus cupiditate, aspernatur provident corrupti sit molestias!",
    },
  ];

  return (
    <div>
      <ProjectHeader projectName={params.name} projectCategory="Website" />
      <div className={classes.projectContent}>
        <Container className={classes.flexContainer}>
          <ImageCard
            source="https://placehold.co/600x400/313131/white"
            className={classes.mainImage}
          />
        </Container>
        <InfoSection projectInfo={projectInfo} projectSpecs={projectSpecs} />
        <ContentSection />
      </div>
    </div>
  );
};

export default ProjectPage;
