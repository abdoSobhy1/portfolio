import { Link } from "react-router-dom";
import classes from "./Close.module.css";
import { IoClose } from "react-icons/io5";

const Close = ({ to, onclick }) => {
  return (
    <button className={classes.button} onClick={onclick}>
      <Link to={to ? to : "#"}>
        <IoClose />
      </Link>
    </button>
  );
};

export default Close;
