import Container from "../../UI/Container/Container";
import ImageCard from "../../UI/imageCard/ImageCard";
import ParHdr from "../../UI/Text/Paragarph/Header";

import classes from "./ContentSection.module.css";

const ContentSection = () => {
  return (
    <div className={classes.contentSection}>
      <Container className={classes.contentSectionContainer}>
        <ImageCard
          className={classes.mainImage}
          source={"https://placehold.co/600x500/313131/white"}
        />
        <ParHdr fontSize={24} className={classes.contentSectionHeader}>
          Lorem ipsum
        </ParHdr>
        <ParHdr fontSize={18} className={classes.contentSectionTitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          veritatis nostrum maxime consectetur illo sunt nobis eveniet expedita
          labore debitis quos praesentium, facere aut eius magnam ratione magni,
          autem ullam.
        </ParHdr>
        <ImageCard source={"https://placehold.co/600x500/313131/white"} />
        <ImageCard source={"https://placehold.co/1000x800/242424/white"} />
        <ParHdr fontSize={24} className={classes.contentSectionHeader}>
          Lorem ipsum
        </ParHdr>
        <ParHdr fontSize={18} className={classes.contentSectionTitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          veritatis nostrum maxime consectetur illo sunt nobis eveniet expedita
          labore debitis quos praesentium, facere aut eius magnam ratione magni,
          autem ullam.
        </ParHdr>
        <ParHdr fontSize={24} className={classes.contentSectionHeader}>
          Lorem ipsum
        </ParHdr>
        <ParHdr fontSize={18} className={classes.contentSectionTitle}>
          <ol className={classes.list}>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ol>
        </ParHdr>
      </Container>
    </div>
  );
};

export default ContentSection;
