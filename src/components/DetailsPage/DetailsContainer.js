import Card from "../utils/Card";
import PageTemplate from "../utils/PageTemplate";
import classes from "./DetailsContainer.module.css";
import AboutShow from "./AboutShow";
import AchievementsSynopsis from "./AchievementsSynopsis";
const DetailsContainer = ({ extractedObject }) => {
  return (
    <PageTemplate title={extractedObject.title}>
      <Card className={classes.container}>
        <AboutShow
          img={extractedObject.img}
          type={extractedObject.type}
          volumes={extractedObject.volumes}
          author={extractedObject.author}
          chapters={extractedObject.chapters}
          status={extractedObject.status}
          published={extractedObject.published}
        />

        <AchievementsSynopsis
          score={extractedObject.score}
          rank={extractedObject.rank}
          popularity={extractedObject.popularity}
          orders={extractedObject.orders}
          price={extractedObject.price}
          synopsis={extractedObject.synopsis}
          background={extractedObject.background}
          cartData={{
            id: extractedObject.mal_id,
            author: extractedObject.author,
            title: extractedObject.title,
            price: extractedObject.price,
          }}
        />
      </Card>
    </PageTemplate>
  );
};

export default DetailsContainer;
