import ParHdr from "../Text/Paragarph/Header";
import Title from "../Text/Title/Title";
import classes from "./Info.module.css";

const Info = ({ title, description }) => {
  return (
    <div className={classes.info}>
      <Title fontSize={14}>{title}</Title>
      <ParHdr fontSize={20}>{description}</ParHdr>
    </div>
  );
};

export default Info;
