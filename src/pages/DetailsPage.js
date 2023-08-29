import { Await, useLoaderData, defer, json } from "react-router-dom";
import DetailsContainer from "../components/DetailsPage/DetailsContainer";
import { Suspense } from "react";
import Loading from "../components/utils/Loading";
const DetailsPage = () => {
  const { response } = useLoaderData();
  let extractedObject = {};
  const extractFunc = (response) => {
    extractedObject = {
      mal_id: response.mal_id,
      title: response.title,
      img:
        response.images && response.images.jpg && response.images.jpg.image_url
          ? response.images.jpg.image_url
          : null,
      type: response.type || "???",
      volumes: response.volumes || "???",
      author:
        response.authors && response.authors[0] && response.authors[0].name
          ? response.authors[0].name
          : "???",
      chapters: response.chapters || "???",
      status: response.status || "???",
      published:
        response.published && response.published.string
          ? response.published.string
          : "???",
      score: response.score || "N/A",
      rank: response.rank || "19284",
      popularity: response.popularity || "N/A",
      orders: response.favorites || "1231",
      price: response.score ? response.score * 2 : null,
      synopsis: response.synopsis || "Synopsis Not Found",
      background: response.background || "Background Not Found",
    };
  };
  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={response}>
        {(dataSet) => {
          extractFunc(dataSet);
          return <DetailsContainer extractedObject={extractedObject} />;
        }}
      </Await>
    </Suspense>
  );
};
export default DetailsPage;

async function deferLoader(request) {
  const url = new URL(request.url);
  let response;
  try {
    response = await fetch(`https://api.jikan.moe/v4${url.pathname}/full`);
  } catch (e) {
    throw json({ message: e }, { status: 500 });
  }
  const data = await response.json();

  return data.data;
}

export function loader({ request }) {
  return defer({ response: deferLoader(request) });
}
