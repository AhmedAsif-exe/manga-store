import classes from "./AboutShow.module.css";
const AboutShow = ({
  img,
  type,
  volumes,
  author,
  chapters,
  status,
  published,
}) => {
  return (
    <div className={classes["about-show"]}>
      <img src={img} alt={`${img ? "Manga" : "Image Not Found"}`} />
      <h3 className={classes.heading}>Information</h3>
      <p>
        <span className={classes.attributes}>Type: </span>
        {type}
      </p>
      <p>
        <span className={classes.attributes}>Volumes: </span>
        {volumes}
      </p>
      <p>
        <span className={classes.attributes}>Author: </span>
        {author}
      </p>
      <p>
        <span className={classes.attributes}>Chapters: </span>
        {chapters}
      </p>
      <p>
        <span className={classes.attributes}>Status: </span>
        {status}
      </p>
      <p>
        <span className={classes.attributes}>Published: </span>
        {published}
      </p>
    </div>
  );
};
export default AboutShow;
