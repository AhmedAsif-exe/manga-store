import classes from "./AchievementsSynopsis.module.css";
import Button from "../utils/Button";
import Achievements from "./Achievements";
import StoryBackground from "./StoryBackground";
import AmountForm from "../utils/AmountForm";
const AchievementsSynopsis = ({
  score,
  rank,
  popularity,
  orders,
  price,
  synopsis,
  background,
  cartData,
}) => {
  return (
    <div className={classes["achievements-synopsis"]}>
      <Achievements
        score={score}
        rank={rank}
        popularity={popularity}
        orders={orders}
        price={price}
      />
      <StoryBackground synopsis={synopsis} background={background} />
      <AmountForm
        formClass={classes.form}
        quantityClass={classes.quantity}
        cartData={cartData}
      >
        <Button type="submit" className={classes.add} /*disabled={!isValid}*/>
          Add
        </Button>
      </AmountForm>
    </div>
  );
};

export default AchievementsSynopsis;
