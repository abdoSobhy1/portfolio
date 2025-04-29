import { Link } from "react-router-dom";
import classes from "./Button.module.css";
import { IoArrowUp } from "react-icons/io5";

const Button = ({ children, className, to, onclick, isHovered }) => {
  return (
    <button
      className={`${classes.button} ${children && classes.content} ${
        className ? className : ""
      }`}
      onClick={onclick}
    >
      <Link to={to ? to : "#"}>
        <p className={classes.linkText}>{children}</p>
        <div className={classes.icons}>
          <div className={`${isHovered ? classes.hovered : ""}`}>
            <IoArrowUp />
            <IoArrowUp />
          </div>
        </div>
      </Link>
    </button>
  );
};

export default Button;
