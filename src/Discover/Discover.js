import React from "react";
import { client } from "../api-client";
import { useAsync } from "../utils/hooks";
import { Link } from "react-router-dom";

export default function DiscoverRecipesScreen() {
  const { data, error, run, isLoading, isError, isSuccess } = useAsync();
  const [query, setQuery] = React.useState();
  const [queried, setQueried] = React.useState(false);

  React.useEffect(() => {
    if (!queried) {
      return;
    }
    run(client({ endpoint: "complexSearch", query }));
  }, [query, queried, run]);

  function handleSearchSubmit(event) {
    event.preventDefault();
    setQueried(true);
    setQuery(event.target.elements.search.value);
  }

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input id="search" />
      </form>
      {isSuccess && (
        <ol>
          {data.results.map((result) => (
            <li>
              <Link to={`recipes/${result.id}`}>{result.title}</Link>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
