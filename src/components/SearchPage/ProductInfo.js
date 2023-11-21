import classes from "./ProductInfo.module.css";
import { Fragment } from "react";
import { Link } from "react-router-dom";
const ProductInfo = ({ src, synopsis, author, price, id }) => {
  return (
    <Fragment>
      <img loading="lazy" src={src} alt="title" />
      <div className={classes.synopsis}>
        <p>
          {synopsis || "Synopsis Not Found"}...
          {!synopsis || <Link to={`/manga/${id}`}>learn more</Link>}
        </p>
      </div>
      <p className={classes.author}>by {author || "Author Not Found"}</p>
      <p className={classes.price}>{price ? `$${price} ONLY` : "FREE"}</p>
    </Fragment>
  );
};
export default ProductInfo;
