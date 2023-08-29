import classes from "./Achievements.module.css";
const Achievements = ({ score, popularity, orders, price, rank }) => {
  return (
    <div className={classes.achievements}>
      <section className={classes["achievement-fields"]}>
        <span className={classes["achievements-heading"]}>Score</span>
        {score}
      </section>
      <section className={classes["achievement-fields"]}>
        <span className={classes["achievements-heading"]}>Rank</span>#{rank}
      </section>
      <section className={classes["achievement-fields"]}>
        <span className={classes["achievements-heading"]}>Popularity</span>#
        {popularity}
      </section>
      <section className={classes["achievement-fields"]}>
        <span className={classes["achievements-heading"]}>Orders</span>
        {orders}
      </section>
      <section className={classes["achievement-fields"]}>
        <span className={classes["achievements-heading"]}>Price</span>
        {price ? `$${price} ONLY` : "FREE"}
      </section>
    </div>
  );
};
export default Achievements;
