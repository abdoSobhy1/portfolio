import classes from "./Card.module.css";

const Card = ({ children, className, hover, style }) => {
  return (
    <div
      className={`${classes.card} ${className ? className : ""} ${
        hover ? classes.hover : ""
      }`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
