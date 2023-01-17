import React from "react";
import { client } from "../api-client";
import { useAsync } from "../utils/hooks";

export default function DiscoverRecipies() {
  const { data, error, run, isLoading, isError, isSuccess } = useAsync();
  const [query, setQuery] = React.useState();
  const [queried, setQueried] = React.useState(false);

  React.useEffect(() => {
    if (!queried) {
      return;
    }
    run(client({ endpoint: "complexSearch", query }, { mock: true }));
  }, [query, queried, run]);

  function handleSearchSubmit(event) {
    event.preventDefault();
    setQueried(true);
    setQuery(event.target.elements.search.value);
  }
  console.log({ data });
  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input id="search" />
      </form>
      {isSuccess && (
        <ol>
          {data.results.map((result) => (
            <li>{result.title}</li>
          ))}
        </ol>
      )}
    </div>
  );
}
