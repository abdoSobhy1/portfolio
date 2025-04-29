import React from "react";
import ProjectHeader from "../../Components/UI/ProjectHeader/ProjectHeader";
import Container from "../../Components/UI/Container/Container";
import Card from "../../Components/UI/card/Card";
import ParHdr from "../../Components/UI/Text/Paragarph/Header";
import Title from "../../Components/UI/Text/Title/Title";

import classes from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <div>
      <ProjectHeader
        projectName="About Me"
        projectCategory="AbdelRahman Sobhy"
      />
      <Container className={classes.aboutContainer}>
        <div>
          <Card>
            <ParHdr fontSize={32}>What I'm about?</ParHdr>
            <Title fontSize={14}>My Story</Title>
            <ParHdr>
              I was born and raised in Cairo, Egypt. Ever since I was a child, I
              have had a passion for art and design. I was captivated by the
              vibrant colors and intricate details of the things around me,
              which inspired me to learn web design, where I delved deeper into
              the world of UX and product design.
            </ParHdr>
            <Title fontSize={14}>My Skills</Title>
            <ParHdr>
              I am a web and mobile developer skilled in React, React Native,
              and more. I am always looking to learn and grow as a developer.
            </ParHdr>
          </Card>
        </div>
        <Card></Card>
      </Container>
    </div>
  );
};

export default AboutPage;
