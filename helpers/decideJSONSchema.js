const decideJSONSchema = (plan_type, meals_frequency) => {
  let JSON_SCHEMA;
  if (meals_frequency === 3 && plan_type.toLowerCase() === "daily") {
    JSON_SCHEMA = JSON_SCHEMA_FIXED_DAILY;
  } else if (meals_frequency !== 3 && plan_type.toLowerCase() === "daily") {
    JSON_SCHEMA = JSON_SCHEMA_FLEXIBLE_DAILY;
  } else if (plan_type?.toLowerCase() === "weekly") {
    JSON_SCHEMA = JSON_SCHEMA_WEEKLY;
  }
  return JSON_SCHEMA;
};

module.exports = decideJSONSchema;
