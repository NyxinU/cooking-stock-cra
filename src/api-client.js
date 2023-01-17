import { spoonacularApiKey } from "./api-key";
import mockData from "./mockData";

function client({ endpoint, query = {} }, customConfig = {}) {
  const config = {
    method: "GET",
    ...customConfig,
  };

  // set up mock data to reduce number of calls to api
  if (config.mock) {
    switch (endpoint) {
      case "random":
        return new Promise((resolve) => {
          resolve(mockData.random);
        });

      default:
        return new Promise((_, reject) => {
          reject(`No mock data for endpoint ${endpoint}`);
        });
    }
  }

  return window
    .fetch(
      `https://api.spoonacular.com/recipes/${endpoint}?apiKey=${spoonacularApiKey}`,
      config
    )
    .then(async (response) => {
      const data = await response.json();
      console.log({ data });
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
}

export { client };
