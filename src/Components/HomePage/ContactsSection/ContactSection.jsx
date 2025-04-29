import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaBehance,
  FaPinterestP,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Card from "../../UI/card/Card";

import classes from "./ContactSection.module.css";

export const ContactSection = () => {
  return (
    <div className={classes.contactRow}>
      <Card className={classes.contactCard} style={{ "--glow": "#6e5494" }}>
        <a href="https://github.com/abdosobhy1" target="_blank">
          <FaGithub />
        </a>
      </Card>
      <Card className={classes.contactCard} style={{ "--glow": "#0077b5" }}>
        <a href="https://www.linkedin.com/in/abdosobhy/" target="_blank">
          <FaLinkedinIn />
        </a>
      </Card>
      <Card className={classes.contactCard} style={{ "--glow": "#0067ff" }}>
        <a href="https://www.behance.net/_abdosobhy" target="_blank">
          <FaBehance />
        </a>
      </Card>
    </div>
  );
};
