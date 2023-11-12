import Card from "../utils/Card";
import classes from "./Products.module.css";
import AmountForm from "../utils/AmountForm";
import ProductInfo from "./ProductInfo";
const Products = ({ result }) => {
  if (result.synopsis && result.synopsis.length > 200)
    result.synopsis = result.synopsis.slice(0, 200);

  return (
    <Card className={classes.card}>
      <h3 className={classes.title}>{result.title || "Title Not Found"}</h3>

      <div className={classes.container}>
        <ProductInfo
          src={result.images.image_url}
          synopsis={result.synopsis}
          author={result.author}
          price={result.price}
          id={result.mal_id}
        />
        <AmountForm
          quantityClass={classes.quantity}
          cartData={{
            id: result.mal_id,
            author: result.author,
            title: result.title,
            price: result.price,
          }}
        >
          <button type="submit" /*disabled={!isValid}*/>+ Add</button>
        </AmountForm>
      </div>
    </Card>
  );
};
export default Products;
