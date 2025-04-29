import classes from "./Header.module.css";

const ParHdr = ({ children, fontSize, className }) => {
  return (
    <h3
      className={`${classes.header} ${className && className}`}
      style={fontSize && { fontSize: `${fontSize}px` }}
    >
      {children}
    </h3>
  );
};

export default ParHdr;
