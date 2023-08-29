import { Await, defer, json, useLoaderData } from "react-router-dom";
import ResultsContainer from "../components/SearchPage/ResultsContainer";
import { Suspense } from "react";
import Loading from "../components/utils/Loading";
const SearchPage = () => {
  const { dataSet } = useLoaderData();

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={dataSet}>
        {(dataSet) => <ResultsContainer dataSet={dataSet} />}
      </Await>
    </Suspense>
  );
};
export default SearchPage;

async function deferLoader(request) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("Title");
  let response;
  try {
    response = await fetch(
      `https://api.jikan.moe/v4/manga?q=${searchTerm}&sfw`
    );

    if (!response.ok) {
      throw json({ message: "Something went wrong", status: 500 });
    }
  } catch (e) {
    return [];
  }
  const data = await response.json();
  return data.data;
}

export function loader({ request }) {
  return defer({ dataSet: deferLoader(request) });
}
