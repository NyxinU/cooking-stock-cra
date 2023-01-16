import { spoonacularApiKey } from "./api-key";

function client(endpoint, customConfig = {}) {
  const config = {
    method: "GET",
    ...customConfig,
  };

  return window
    .fetch(
      `https://api.spoonacular.com/recipes/${endpoint}?apiKey=${spoonacularApiKey}`,
      config
    )
    .then(async (response) => {
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
}

export { client };
