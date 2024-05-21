require("dotenv").config();

const MODEL = "gpt-3.5-turbo";
const API_KEY = process.env.OPENAI_API_KEY;
const DIETRY_PREFS = ["Vegan", "Non-Veg", "Paleo", "Keto", "Gluten-free"];
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
    0: {
      Recipe: "Recipe Name",
      Time: "Time for the meal",
      Ingredients: ["list of all ingredients seperated by commas"],
      Calories: "Integer Value",
      Protein: "Integer Value (unit is in grams)",
      Carbohydrates: "Integer Value (unit is in grams)",
      Fats: "Integer Value (unit is in grams)",
    },
    1: {
      Recipe: "Recipe Name",
      Time: "Time for the meal",
      Ingredients: ["list of all ingredients seperated by commas"],
      Calories: "Integer Value",
      Protein: "Integer Value (unit is in grams)",
      Carbohydrates: "Integer Value (unit is in grams)",
      Fats: "Integer Value (unit is in grams)",
    },
  },
};

const JSON_SCHEMA_WEEKLY = {
  mealPlan: {
    Monday: {
      0: {
        Recipe: "Recipe Name",
        Ingredients: ["list of all ingredients seperated by commas"],
        Calories: "Integer Value",
        Protein: "Integer Value (unit is in grams)",
        Carbohydrates: "Integer Value (unit is in grams)",
        Fats: "Integer Value (unit is in grams)",
      },
      1: {
        Recipe: "Recipe Name",
        Ingredients: ["list of all ingredients seperated by commas"],
        Calories: "Integer Value",
        Protein: "Integer Value (unit is in grams)",
        Carbohydrates: "Integer Value (unit is in grams)",
        Fats: "Integer Value (unit is in grams)",
      },
    },
    Tuesday: {},
    Wednesday: {},
    Thursday: {},
    Friday: {},
    Saturday: {},
    Sunday: {},
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
