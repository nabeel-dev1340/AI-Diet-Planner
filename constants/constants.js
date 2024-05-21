require("dotenv").config();

const MODEL = "gpt-3.5-turbo";
const API_KEY = process.env.OPENAI_API_KEY;
const DIETRY_PREFS = [
  "Vegan",
  "Non-Veg",
  "Paleo",
  "Keto",
  "Gluten-free",
  "Veg+Non-Veg",
  "Mix"
];
const GOALS = [
  "Weight loss",
  "Weight gain",
  "muscle gain",
  "strength maintenance",
  "heart health",
  "digestive health",
  "diabetes management",
];
const PLAN_TYPE = ["Daily", "Weekly"];

const JSON_SCHEMA_FIXED_DAILY = {
  mealPlan: {
    BreakFast: {
      Recipe: "Recipe Name",
      Ingredients: ["list of all ingredients seperated by commas"],
      Calories: "Integer Value",
      Protein: "Integer Value (unit is in grams)",
      Carbohydrates: "Integer Value (unit is in grams)",
      Fats: "Integer Value (unit is in grams)",
    },
    Lunch: {
      Recipe: "Recipe Name",
      Ingredients: ["list of all ingredients seperated by commas"],
      Calories: "Integer Value",
      Protein: "Integer Value (unit is in grams)",
      Carbohydrates: "Integer Value (unit is in grams)",
      Fats: "Integer Value (unit is in grams)",
    },
    Dinner: {
      Recipe: "Recipe Name",
      Ingredients: ["list of all ingredients seperated by commas"],
      Calories: "Integer Value",
      Protein: "Integer Value (unit is in grams)",
      Carbohydrates: "Integer Value (unit is in grams)",
      Fats: "Integer Value (unit is in grams)",
    },
  },
};

const JSON_SCHEMA_FLEXIBLE_DAILY = {
  mealPlan: {
    meals: [],
  },
};

const JSON_SCHEMA_WEEKLY = {
  mealPlan: {
    Monday: [
      {
        Recipe: "Recipe Name",
        Ingredients: ["list of all ingredients separated by commas"],
        Calories: "Integer Value",
        Protein: "Integer Value (unit is in grams)",
        Carbohydrates: "Integer Value (unit is in grams)",
        Fats: "Integer Value (unit is in grams)",
      },
      // Additional meals can be added here
    ],
    Tuesday: [
      {
        Recipe: "Recipe Name",
        Ingredients: ["list of all ingredients separated by commas"],
        Calories: "Integer Value",
        Protein: "Integer Value (unit is in grams)",
        Carbohydrates: "Integer Value (unit is in grams)",
        Fats: "Integer Value (unit is in grams)",
      },
      // Additional meals can be added here
    ],
    Wednesday: [
      {
        Recipe: "Recipe Name",
        Ingredients: ["list of all ingredients separated by commas"],
        Calories: "Integer Value",
        Protein: "Integer Value (unit is in grams)",
        Carbohydrates: "Integer Value (unit is in grams)",
        Fats: "Integer Value (unit is in grams)",
      },
      // Additional meals can be added here
    ],
    Thursday: [
      {
        Recipe: "Recipe Name",
        Ingredients: ["list of all ingredients separated by commas"],
        Calories: "Integer Value",
        Protein: "Integer Value (unit is in grams)",
        Carbohydrates: "Integer Value (unit is in grams)",
        Fats: "Integer Value (unit is in grams)",
      },
      // Additional meals can be added here
    ],
    Friday: [
      {
        Recipe: "Recipe Name",
        Ingredients: ["list of all ingredients separated by commas"],
        Calories: "Integer Value",
        Protein: "Integer Value (unit is in grams)",
        Carbohydrates: "Integer Value (unit is in grams)",
        Fats: "Integer Value (unit is in grams)",
      },
      // Additional meals can be added here
    ],
    Saturday: [
      {
        Recipe: "Recipe Name",
        Ingredients: ["list of all ingredients separated by commas"],
        Calories: "Integer Value",
        Protein: "Integer Value (unit is in grams)",
        Carbohydrates: "Integer Value (unit is in grams)",
        Fats: "Integer Value (unit is in grams)",
      },
      // Additional meals can be added here
    ],
    Sunday: [
      {
        Recipe: "Recipe Name",
        Ingredients: ["list of all ingredients separated by commas"],
        Calories: "Integer Value",
        Protein: "Integer Value (unit is in grams)",
        Carbohydrates: "Integer Value (unit is in grams)",
        Fats: "Integer Value (unit is in grams)",
      },
      // Additional meals can be added here
    ],
  },
};

module.exports = {
  MODEL,
  API_KEY,
  DIETRY_PREFS,
  PLAN_TYPE,
  JSON_SCHEMA_FIXED_DAILY,
  JSON_SCHEMA_FLEXIBLE_DAILY,
  JSON_SCHEMA_WEEKLY,
  GOALS,
};
