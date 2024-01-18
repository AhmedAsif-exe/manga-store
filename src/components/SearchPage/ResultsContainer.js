import { useSearchParams } from "react-router-dom";
import Products from "./Products";
import PageTemplate from "../utils/PageTemplate";
import { useEffect, useState } from "react";
function getDivision(number) {
  let divisionString = "";
  for (let counter = 0; counter < number; ++counter) divisionString += "1fr ";
  return divisionString.trim();
}
const ResultsContainer = (props) => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("Title");
  const trim = props.dataSet;
  const [divisions, setDivisions] = useState(4);
  useEffect(() => {
    const divider = () => {
      setDivisions(Math.ceil(window.innerWidth / 400));
    };
    divider();
    window.addEventListener("resize", divider);
  }, []);
  const results = trim.map((data) => {
    return {
      mal_id: data.mal_id,
      title: data.title_english || "Title Not Found",
      author: data.authors[0] ? data.authors[0].name : "Name Not Found",
      price: data.score * 2,
      synopsis: data.synopsis || "No Sypnosis Found",
      images: data.images ? data.images.jpg : "Image Not Found",
    };
  });

  return (
    <PageTemplate
      title={
        results.length > 0
          ? title
            ? `Search Results for ${title}...`
            : "Popular Releases..."
          : "No Results Found..."
      }
    >
      <div
        style={{ display: "grid", gridTemplateColumns: getDivision(divisions) }}
      >
        {results.map((result) => (
          <Products
            result={result}
            key={result.mal_id * Math.random() * Math.random()}
          />
        ))}
      </div>
    </PageTemplate>
  );
};

export default ResultsContainer;
