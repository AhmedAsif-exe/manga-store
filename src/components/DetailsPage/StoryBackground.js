import classes from "./StoryBackground.module.css";
const StoryBackground = ({ synopsis, background }) => {
  return (
    <div className={classes.synopsis}>
      <h3 className={classes.heading}>Synopsis</h3>
      <section className={classes.story}>{synopsis}</section>
      <h3 className={classes.heading}>Background</h3>
      <section className={classes.background}>{background}</section>
    </div>
  );
};
export default StoryBackground;
