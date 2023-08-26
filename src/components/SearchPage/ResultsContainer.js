import classes from "./ResultsContainer.module.css";
import { useSearchParams } from "react-router-dom";
import Products from "./Products";
const ResultsContainer = (props) => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("Title");
  const trim = props.dataSet.slice(0, 12);
  const results = trim.map((data) => {
    return {
      mal_id: data.mal_id,
      title: data.title_english || "Title Not Found",
      author: data.authors[0] ? data.authors[0].name : "Name Not Found",
      price: data.score * 2,
      synopsis: data.synopsis,
      images: data.images ? data.images.jpg : "Image Not Found",
    };
  });
  return (
    <div className={classes.container}>
      <h2>
        {results.length > 0
          ? title
            ? `Search Results for ${title}...`
            : "Popular Releases..."
          : "No Results Found..."}
      </h2>
      <div className={classes.grid}>
        {results.map((result) => (
          <Products
            result={result}
            key={result.mal_id * Math.random() * Math.random()}
          />
        ))}
      </div>
    </div>
  );
};

export default ResultsContainer;
