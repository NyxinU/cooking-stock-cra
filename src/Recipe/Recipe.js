import React from "react";
import { client } from "../api-client";
import { useAsync } from "../utils/hooks";
import * as R from "ramda";

export default function Recipe() {
  const { data, run, isSuccess } = useAsync();
  const id = 652078;

  React.useEffect(() => {
    run(client({ endpoint: `recipes/${id}/information` }, { mock: true }));
  }, [run]);

  console.log({ isSuccess, data });

  return isSuccess ? (
    <ul>
      {R.map(([key, val]) => {
        console.log({ key, val });
        return <li>{`${key}: ${JSON.stringify(val)}`}</li>;
      }, R.toPairs(data.recipes[0]))}
    </ul>
  ) : (
    "fail"
  );
}