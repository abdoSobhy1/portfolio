import classes from "./ImageCard.module.css";

const ImageCard = ({ source, className }) => {
  return (
    <div className={`${classes.card} ${className ? className : ""}`}>
      <img src={source} alt={source} />
    </div>
  );
};

export default ImageCard;
