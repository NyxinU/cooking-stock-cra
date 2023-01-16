import React from "react";
import { client } from "../api-client";
import { useAsync } from "../utils/hooks";
// import mockData from "../mockData";

export default function RandomRecipe() {
  const { data, run, isSuccess } = useAsync();

  console.log("hook", data);
  React.useEffect(() => {
    run(client("random"));
  }, [run]);

  return <div>{isSuccess ? JSON.stringify(data.recipes[0]) : "fail"}</div>;
}
