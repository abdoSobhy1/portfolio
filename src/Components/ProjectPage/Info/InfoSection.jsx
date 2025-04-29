import Button from "../../UI/Button/Button";
import Card from "../../UI/card/Card";
import Container from "../../UI/Container/Container";
import ParHdr from "../../UI/Text/Paragarph/Header";
import Title from "../../UI/Text/Title/Title";
import Info from "../../UI/InfoLine/Info";

import classes from "./InfoSection.module.css";

const InfoSection = ({ projectInfo, projectSpecs }) => {
  return (
    <div className={classes.projectInfo}>
      <Container className={classes.infoContainer}>
        <Card>
          {projectInfo.map((info) => {
            if (info.description.length > 1) {
              return (
                <div className={classes.line} key={info.title}>
                  <Title fontSize={14}>{info.title}</Title>
                  <div>
                    {info.description.map((item) => (
                      <ParHdr key={item} fontSize={20}>
                        {item}
                      </ParHdr>
                    ))}
                  </div>
                </div>
              );
            } else {
              return (
                <div className={classes.line} key={info.title}>
                  <Info title={info.title} description={info.description} />
                </div>
              );
            }
          })}
        </Card>
        <Card className={classes.projectSpecs}>
          {projectSpecs.map((info) => {
            return (
              <div className={classes.line} key={info.title}>
                <Info title={info.title} description={info.description} />
              </div>
            );
          })}
          <Button className={classes.infoBtn}>Check It Out!</Button>
        </Card>
      </Container>
    </div>
  );
};

export default InfoSection;
