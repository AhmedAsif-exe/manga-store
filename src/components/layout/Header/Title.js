import Dot from "../../utils/icons/Dot";
import classes from "./Title.module.css";
import { useNavigate } from "react-router-dom";
const Title = (props) => {
  const navigate = useNavigate();
  return (
    <h1
      onClick={() => {
        navigate("/");
      }}
      className={classes.title}
    >
      <Dot svg={classes.svg} />マ
      <span className={classes["highlight-red"]}>ン</span>ガクエスト
    </h1>
  );
};
export default Title;
