const mockData = {
  random: {
    recipes: [
      {
        vegetarian: false,
        vegan: false,
        glutenFree: true,
        dairyFree: true,
        veryHealthy: false,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        lowFodmap: false,
        weightWatcherSmartPoints: 42,
        gaps: "no",
        preparationMinutes: -1,
        cookingMinutes: -1,
        aggregateLikes: 15,
        healthScore: 27,
        creditsText:
          "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
        license: "CC BY 3.0",
        sourceName: "Foodista",
        pricePerServing: 316.08,
        extendedIngredients: [
          {
            id: 10010088,
            aisle: "Meat",
            image: "raw-pork-ribs.jpg",
            consistency: "SOLID",
            name: "pork spareribs",
            nameClean: "pork spare ribs",
            original: "5 pounds Pork spareribs, up to 6",
            originalName: "Pork spareribs, up to 6",
            amount: 5,
            unit: "pounds",
            meta: [],
            measures: {
              us: {
                amount: 5,
                unitShort: "lb",
                unitLong: "pounds",
              },
              metric: {
                amount: 2.268,
                unitShort: "kgs",
                unitLong: "kgs",
              },
            },
          },
          {
            id: 4042,
            aisle: "Oil, Vinegar, Salad Dressing",
            image: "peanut-oil.jpg",
            consistency: "LIQUID",
            name: "peanut oil",
            nameClean: "peanut oil",
            original: "3 tablespoons Peanut oil",
            originalName: "Peanut oil",
            amount: 3,
            unit: "tablespoons",
            meta: [],
            measures: {
              us: {
                amount: 3,
                unitShort: "Tbsps",
                unitLong: "Tbsps",
              },
              metric: {
                amount: 3,
                unitShort: "Tbsps",
                unitLong: "Tbsps",
              },
            },
          },
          {
            id: 11215,
            aisle: "Produce",
            image: "garlic.png",
            consistency: "SOLID",
            name: "garlic cloves",
            nameClean: "garlic",
            original: "2 Garlic cloves, minced",
            originalName: "Garlic cloves, minced",
            amount: 2,
            unit: "",
            meta: ["minced"],
            measures: {
              us: {
                amount: 2,
                unitShort: "",
                unitLong: "",
              },
              metric: {
                amount: 2,
                unitShort: "",
                unitLong: "",
              },
            },
          },
          {
            id: 11282,
            aisle: "Produce",
            image: "brown-onion.png",
            consistency: "SOLID",
            name: "onion",
            nameClean: "onion",
            original: "1 medium Onion, minced",
            originalName: "Onion, minced",
            amount: 1,
            unit: "medium",
            meta: ["minced"],
            measures: {
              us: {
                amount: 1,
                unitShort: "medium",
                unitLong: "medium",
              },
              metric: {
                amount: 1,
                unitShort: "medium",
                unitLong: "medium",
              },
            },
          },
          {
            id: 11935,
            aisle: "Condiments",
            image: "ketchup.png",
            consistency: "LIQUID",
            name: "catsup",
            nameClean: "ketchup",
            original: "2/3 cup Tomato catsup",
            originalName: "Tomato catsup",
            amount: 0.6666667,
            unit: "cup",
            meta: [],
            measures: {
              us: {
                amount: 0.667,
                unitShort: "cups",
                unitLong: "cups",
              },
              metric: {
                amount: 157.725,
                unitShort: "ml",
                unitLong: "milliliters",
              },
            },
          },
          {
            id: 2048,
            aisle: "Oil, Vinegar, Salad Dressing",
            image: "apple-cider-vinegar.jpg",
            consistency: "LIQUID",
            name: "cider vinegar",
            nameClean: "apple cider vinegar",
            original: "1/2 cup Cider vinegar",
            originalName: "Cider vinegar",
            amount: 0.5,
            unit: "cup",
            meta: [],
            measures: {
              us: {
                amount: 0.5,
                unitShort: "cups",
                unitLong: "cups",
              },
              metric: {
                amount: 118.294,
                unitShort: "ml",
                unitLong: "milliliters",
              },
            },
          },
          {
            id: 6971,
            aisle: "Condiments",
            image: "dark-sauce.jpg",
            consistency: "LIQUID",
            name: "worcestershire sauce",
            nameClean: "worcestershire sauce",
            original: "1/4 cup Worcestershire sauce",
            originalName: "Worcestershire sauce",
            amount: 0.25,
            unit: "cup",
            meta: [],
            measures: {
              us: {
                amount: 0.25,
                unitShort: "cups",
                unitLong: "cups",
              },
              metric: {
                amount: 59.147,
                unitShort: "ml",
                unitLong: "milliliters",
              },
            },
          },
          {
            id: 9152,
            aisle: "Produce",
            image: "lemon-juice.jpg",
            consistency: "LIQUID",
            name: "lemon juice",
            nameClean: "lemon juice",
            original: "2 tablespoons Fresh lemon juice",
            originalName: "Fresh lemon juice",
            amount: 2,
            unit: "tablespoons",
            meta: ["fresh"],
            measures: {
              us: {
                amount: 2,
                unitShort: "Tbsps",
                unitLong: "Tbsps",
              },
              metric: {
                amount: 2,
                unitShort: "Tbsps",
                unitLong: "Tbsps",
              },
            },
          },
          {
            id: 1002024,
            aisle: "Spices and Seasonings",
            image: "dry-mustard.jpg",
            consistency: "SOLID",
            name: "dry mustard",
            nameClean: "mustard powder",
            original: "2 teaspoons Dry mustard",
            originalName: "Dry mustard",
            amount: 2,
            unit: "teaspoons",
            meta: ["dry"],
            measures: {
              us: {
                amount: 2,
                unitShort: "tsps",
                unitLong: "teaspoons",
              },
              metric: {
                amount: 2,
                unitShort: "tsps",
                unitLong: "teaspoons",
              },
            },
          },
          {
            id: 2021,
            aisle: "Spices and Seasonings",
            image: "ginger.png",
            consistency: "SOLID",
            name: "ground ginger",
            nameClean: "ginger powder",
            original: "1 teaspoon Ground ginger",
            originalName: "Ground ginger",
            amount: 1,
            unit: "teaspoon",
            meta: [],
            measures: {
              us: {
                amount: 1,
                unitShort: "tsp",
                unitLong: "teaspoon",
              },
              metric: {
                amount: 1,
                unitShort: "tsp",
                unitLong: "teaspoon",
              },
            },
          },
          {
            id: 2047,
            aisle: "Spices and Seasonings",
            image: "salt.jpg",
            consistency: "SOLID",
            name: "salt",
            nameClean: "table salt",
            original: "1 1/4 teaspoons Salt",
            originalName: "Salt",
            amount: 1.25,
            unit: "teaspoons",
            meta: [],
            measures: {
              us: {
                amount: 1.25,
                unitShort: "tsps",
                unitLong: "teaspoons",
              },
              metric: {
                amount: 1.25,
                unitShort: "tsps",
                unitLong: "teaspoons",
              },
            },
          },
          {
            id: 19296,
            aisle: "Nut butters, Jams, and Honey",
            image: "honey.png",
            consistency: "LIQUID",
            name: "honey",
            nameClean: "honey",
            original: "1/4 cup Honey",
            originalName: "Honey",
            amount: 0.25,
            unit: "cup",
            meta: [],
            measures: {
              us: {
                amount: 0.25,
                unitShort: "cups",
                unitLong: "cups",
              },
              metric: {
                amount: 59.147,
                unitShort: "ml",
                unitLong: "milliliters",
              },
            },
          },
          {
            id: 19334,
            aisle: "Baking",
            image: "light-brown-sugar.jpg",
            consistency: "SOLID",
            name: "brown sugar",
            nameClean: "golden brown sugar",
            original: "2 tablespoons Brown sugar",
            originalName: "Brown sugar",
            amount: 2,
            unit: "tablespoons",
            meta: [],
            measures: {
              us: {
                amount: 2,
                unitShort: "Tbsps",
                unitLong: "Tbsps",
              },
              metric: {
                amount: 2,
                unitShort: "Tbsps",
                unitLong: "Tbsps",
              },
            },
          },
        ],
        id: 645884,
        title: "Grilled Spareribs With Birmingham Bbq Sauce",
        readyInMinutes: 45,
        servings: 6,
        sourceUrl:
          "https://www.foodista.com/recipe/LXB7PL35/grilled-spareribs-with-birmingham-bbq-sauce",
        image: "https://spoonacular.com/recipeImages/645884-556x370.jpg",
        imageType: "jpg",
        summary:
          'Grilled Spareribs With Birmingham Bbq Sauce is a <b>gluten free and dairy free</b> main course. This recipe makes 6 servings with <b>1224 calories</b>, <b>59g of protein</b>, and <b>96g of fat</b> each. For <b>$3.16 per serving</b>, this recipe <b>covers 37%</b> of your daily requirements of vitamins and minerals. It can be enjoyed any time, but it is especially good for <b>The Fourth Of July</b>. 15 people have made this recipe and would make it again. If you have brown sugar, peanut oil, mustard, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around <b>around 45 minutes</b>. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 79%</b>. This score is solid. If you like this recipe, you might also like recipes such as <a href="https://spoonacular.com/recipes/grilled-bbq-chicken-pizza-with-cherry-chipotle-bbq-sauce-475295">Grilled BBQ Chicken Pizza, with Cherry Chipotle BBQ Sauce</a>, <a href="https://spoonacular.com/recipes/sweet-mesquite-bbq-spareribs-265836">Sweet Mesquite BBQ Spareribs</a>, and <a href="https://spoonacular.com/recipes/fall-off-the-bone-oven-bbq-pork-spareribs-558651">Fall-Off-The-Bone Oven BBQ Pork Spareribs</a>.',
        cuisines: [],
        dishTypes: ["lunch", "main course", "main dish", "dinner"],
        diets: ["gluten free", "dairy free"],
        occasions: ["father's day", "4th of july", "summer"],
        instructions:
          "Trim the ribs, including fat and membrane, leaving the rack of ribs whole and at room temperature.\nCombine all other ingredients except the honey and brown sugar. Lay ribs flat in a glass or ceramic dish and pour marinade over them. Allow to marinate at least 4 hours; better still, refrigerate overnight for maximum flavor. Bring to room temperature before grilling.\nRemove ribs from marinade. Scrape marinade from ribs with a rubber spatula and reserve. Grill ribs over a slow fire for about 40 minutes, turning frequently; fire should not flare up and burn them.\nPlace reserved marinade in a saucepan and add sugar and honey. Heat only until the sugar is dissolved. Brush on ribs and continue grilling about 20 minutes more, basting as often as necessary to keep ribs moist.\nSlice ribs just before serving. To serve, put 2 to 3 tablespoons of sauce on a plate and lay 2 or 3 ribs on top.\nNOTES : Jack Burson, a friend from Birmingham, Alabama, has told me that his hometown offers some of the best barbecue he has eaten. Now that he's a neighbor in New York, we cook together frequently. Here is our version of one of the best-ever barbecue sauces.",
        analyzedInstructions: [
          {
            name: "",
            steps: [
              {
                number: 1,
                step: "Trim the ribs, including fat and membrane, leaving the rack of ribs whole and at room temperature.",
                ingredients: [
                  {
                    id: 23236,
                    name: "ribs",
                    localizedName: "ribs",
                    image: "ribs.png",
                  },
                ],
                equipment: [],
              },
              {
                number: 2,
                step: "Combine all other ingredients except the honey and brown sugar.",
                ingredients: [
                  {
                    id: 19334,
                    name: "brown sugar",
                    localizedName: "brown sugar",
                    image: "dark-brown-sugar.png",
                  },
                  {
                    id: 19296,
                    name: "honey",
                    localizedName: "honey",
                    image: "honey.png",
                  },
                ],
                equipment: [],
              },
              {
                number: 3,
                step: "Lay ribs flat in a glass or ceramic dish and pour marinade over them. Allow to marinate at least 4 hours; better still, refrigerate overnight for maximum flavor. Bring to room temperature before grilling.",
                ingredients: [
                  {
                    id: 0,
                    name: "marinade",
                    localizedName: "marinade",
                    image: "seasoning.png",
                  },
                  {
                    id: 23236,
                    name: "ribs",
                    localizedName: "ribs",
                    image: "ribs.png",
                  },
                ],
                equipment: [],
                length: {
                  number: 240,
                  unit: "minutes",
                },
              },
              {
                number: 4,
                step: "Remove ribs from marinade. Scrape marinade from ribs with a rubber spatula and reserve. Grill ribs over a slow fire for about 40 minutes, turning frequently; fire should not flare up and burn them.",
                ingredients: [
                  {
                    id: 0,
                    name: "marinade",
                    localizedName: "marinade",
                    image: "seasoning.png",
                  },
                  {
                    id: 23236,
                    name: "ribs",
                    localizedName: "ribs",
                    image: "ribs.png",
                  },
                ],
                equipment: [
                  {
                    id: 404642,
                    name: "spatula",
                    localizedName: "spatula",
                    image: "spatula-or-turner.jpg",
                  },
                  {
                    id: 404706,
                    name: "grill",
                    localizedName: "grill",
                    image: "grill.jpg",
                  },
                ],
                length: {
                  number: 40,
                  unit: "minutes",
                },
              },
              {
                number: 5,
                step: "Place reserved marinade in a saucepan and add sugar and honey.",
                ingredients: [
                  {
                    id: 0,
                    name: "marinade",
                    localizedName: "marinade",
                    image: "seasoning.png",
                  },
                  {
                    id: 19296,
                    name: "honey",
                    localizedName: "honey",
                    image: "honey.png",
                  },
                  {
                    id: 19335,
                    name: "sugar",
                    localizedName: "sugar",
                    image: "sugar-in-bowl.png",
                  },
                ],
                equipment: [
                  {
                    id: 404669,
                    name: "sauce pan",
                    localizedName: "sauce pan",
                    image: "sauce-pan.jpg",
                  },
                ],
              },
              {
                number: 6,
                step: "Heat only until the sugar is dissolved.",
                ingredients: [
                  {
                    id: 19335,
                    name: "sugar",
                    localizedName: "sugar",
                    image: "sugar-in-bowl.png",
                  },
                ],
                equipment: [],
              },
              {
                number: 7,
                step: "Brush on ribs and continue grilling about 20 minutes more, basting as often as necessary to keep ribs moist.",
                ingredients: [
                  {
                    id: 23236,
                    name: "ribs",
                    localizedName: "ribs",
                    image: "ribs.png",
                  },
                ],
                equipment: [],
                length: {
                  number: 20,
                  unit: "minutes",
                },
              },
              {
                number: 8,
                step: "Slice ribs just before serving. To serve, put 2 to 3 tablespoons of sauce on a plate and lay 2 or 3 ribs on top.",
                ingredients: [
                  {
                    id: 0,
                    name: "sauce",
                    localizedName: "sauce",
                    image: "",
                  },
                  {
                    id: 23236,
                    name: "ribs",
                    localizedName: "ribs",
                    image: "ribs.png",
                  },
                ],
                equipment: [],
              },
              {
                number: 9,
                step: "NOTES : Jack Burson, a friend from Birmingham, Alabama, has told me that his hometown offers some of the best barbecue he has eaten. Now that he's a neighbor in New York, we cook together frequently. Here is our version of one of the best-ever barbecue sauces.",
                ingredients: [],
                equipment: [],
              },
            ],
          },
        ],
        originalId: null,
        spoonacularSourceUrl:
          "https://spoonacular.com/grilled-spareribs-with-birmingham-bbq-sauce-645884",
      },
    ],
  },
  complexSearch: {
    results: [
      {
        id: 716426,
        title: "Cauliflower, Brown Rice, and Vegetable Fried Rice",
        image: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 715594,
        title: "Homemade Garlic and Basil French Fries",
        image: "https://spoonacular.com/recipeImages/715594-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 715497,
        title: "Berry Banana Breakfast Smoothie",
        image: "https://spoonacular.com/recipeImages/715497-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 644387,
        title: "Garlicky Kale",
        image: "https://spoonacular.com/recipeImages/644387-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 716268,
        title: "African Chicken Peanut Stew",
        image: "https://spoonacular.com/recipeImages/716268-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 716381,
        title: "Nigerian Snail Stew",
        image: "https://spoonacular.com/recipeImages/716381-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 782601,
        title: "Red Kidney Bean Jambalaya",
        image: "https://spoonacular.com/recipeImages/782601-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 794349,
        title: "Broccoli and Chickpea Rice Salad",
        image: "https://spoonacular.com/recipeImages/794349-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 715446,
        title: "Slow Cooker Beef Stew",
        image: "https://spoonacular.com/recipeImages/715446-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 715415,
        title: "Red Lentil Soup with Chicken and Turnips",
        image: "https://spoonacular.com/recipeImages/715415-312x231.jpg",
        imageType: "jpg",
      },
    ],
    offset: 0,
    number: 10,
    totalResults: 5219,
  },
};

export default mockData;
