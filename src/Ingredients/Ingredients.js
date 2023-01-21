import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { addIngredient, getIngredients } from "./IngredientsFirestore";

export default function Ingredients() {
  const queryClient = useQueryClient();
  const query = useQuery("ingredients", getIngredients);
  const mutation = useMutation(addIngredient, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("todos");
    },
  });

  function handleSubmit(event) {
    event.preventDefault();
    const ingredientName = event.target.elements["add-ingredient"].value;
    mutation.mutate(ingredientName);
    // setQueried(true);
    // setQuery(event.target.elements['add-ingredient'].value);
  }

  return (
    <div>
      <h1>ingredients</h1>
      <form onSubmit={handleSubmit}>
        <input id="add-ingredient" />
      </form>
      <ul>
        {query?.data?.map(({ name }) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
}
