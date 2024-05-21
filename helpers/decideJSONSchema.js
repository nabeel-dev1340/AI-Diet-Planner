const {
  JSON_SCHEMA_FIXED_DAILY,
  JSON_SCHEMA_FLEXIBLE_DAILY,
  JSON_SCHEMA_WEEKLY,
} = require("../constants/constants");

const recipeObject = {
  Recipe: "Recipe Name",
  Time: "Time for the meal",
  Ingredients: ["list of all ingredients seperated by commas"],
  Calories: "Integer Value",
  Protein: "Integer Value (unit is in grams)",
  Carbohydrates: "Integer Value (unit is in grams)",
  Fats: "Integer Value (unit is in grams)",
};

const decideJSONSchema = (plan_type, meals_frequency) => {
  let JSON_SCHEMA;
  if (meals_frequency === 3 && plan_type.toLowerCase() === "daily") {
    JSON_SCHEMA = JSON_SCHEMA_FIXED_DAILY;
  } else if (meals_frequency !== 3 && plan_type.toLowerCase() === "daily") {
    JSON_SCHEMA = JSON_SCHEMA_FLEXIBLE_DAILY;
    for (let i = 0; i < meals_frequency; i++) {
      JSON_SCHEMA_FLEXIBLE_DAILY.mealPlan.meals.push(recipeObject);
    }
  } else if (plan_type?.toLowerCase() === "weekly") {
    JSON_SCHEMA = JSON_SCHEMA_WEEKLY;
    for (let i = 0; i < meals_frequency; i++) {
      JSON_SCHEMA_WEEKLY.mealPlan.Monday.push(recipeObject);
      JSON_SCHEMA_WEEKLY.mealPlan.Tuesday.push(recipeObject);
      JSON_SCHEMA_WEEKLY.mealPlan.Wednesday.push(recipeObject);
      JSON_SCHEMA_WEEKLY.mealPlan.Thursday.push(recipeObject);
      JSON_SCHEMA_WEEKLY.mealPlan.Friday.push(recipeObject);
      JSON_SCHEMA_WEEKLY.mealPlan.Saturday.push(recipeObject);
      JSON_SCHEMA_WEEKLY.mealPlan.Sunday.push(recipeObject);
    }
  }
  return JSON_SCHEMA;
};

module.exports = decideJSONSchema;
