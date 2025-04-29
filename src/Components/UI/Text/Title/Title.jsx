import classes from "./Title.module.css";

const Title = ({ children, fontSize }) => {
  return (
    <p
      className={classes.title}
      style={fontSize && { fontSize: `${fontSize}px` }}
    >
      {children}
    </p>
  );
};

export default Title;
