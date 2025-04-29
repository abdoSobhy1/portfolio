import Button from "../../Components/UI/Button/Button";
import Card from "../../Components/UI/card/Card";
import ProjectCard from "../../Components/UI/ProjectCard/ProjectCard";
import ParHdr from "../../Components/UI/Text/Paragarph/Header";
import myProfile from "../../assets/images/myProfile.jpg";
import Title from "../../Components/UI/Text/Title/Title";
import { useEffect, useState } from "react";
import { StackSection } from "../../Components/HomePage/StackSection/StackSection";
import { ContactSection } from "../../Components/HomePage/ContactsSection/ContactSection";
import ProjectsCard from "../../Components/HomePage/ProjectsCard/projectsCard";

import classes from "./HomePage.module.css";
import ThemeCard from "../../Components/HomePage/ThemeCard/ThemeCard";

const HomePage = () => {
  const project = {
    img: "https://i.ibb.co/4WJ2qXt/Screen-Shot-2021-09-06-at-11-10-56-PM.png",
    title: "Portfolio",
  };

  const [isHovered, setIsHovered] = useState(false);

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className={classes.homeContainer}>
      <div className={classes.mainContent}>
        <div className={classes.row}>
          <Card className={classes.mainCard}>
            <ParHdr fontSize={28}>Hi, I'm AbdelRahman Sobhy</ParHdr>
            <p className={classes.subheading}>
              Web and mobile developer skilled in React, React Native, and more.
            </p>
          </Card>
          <ProjectCard project={project} />
          <ProjectCard project={project} />
        </div>
        <div className={classes.row}>
          <Card className={`${classes.profileCard} mobile-hidden`}>
            <img src={myProfile} alt="my profile" />
          </Card>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ flex: 0.8 }}
          >
            <Card className={classes.aboutCard} hover={true}>
              <Title>About Me</Title>
              <ParHdr>
                I am always looking to learn and grow as a developer.
              </ParHdr>
              <Button
                className={classes.aboutBtn}
                isHovered={isHovered}
                to={"/about"}
              />
            </Card>
          </div>
          <ProjectCard project={project} />
        </div>
        <div className={classes.row}>
          <ProjectCard project={project} />
          <StackSection />
        </div>
      </div>
      <div className={classes.sideBar}>
        <ContactSection />
        <ProjectsCard />
        <Card>
          <Title>Have a project in mind?</Title>
          <div className={classes.contactRow}>
            <a href="mailto:abdoosobhy97@gmail.com">
              <ParHdr>Let's Connect!</ParHdr>
            </a>
            <Button
              className={classes.contactBtn}
              to={"mailto:abdoosobhy97@gmail.com"}
            ></Button>
          </div>
        </Card>
        <Card className={classes.hireMeCard}>
          <ParHdr>Hire me?</ParHdr>
          <Button>My Resume</Button>
        </Card>
        <ThemeCard darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
};

export default HomePage;
