const { MODEL, API_KEY } = require("../constants/constants");
const removeUnwantedChars = require("../helpers/removeUnwanted");
const decideJSONSchema = require("../helpers/decideJSONSchema");
const { MealPrefsSchema } = require("../schemas/mealPrefs");
const axios = require("axios");

const generateDietPlan = async (req, res) => {
  try {
    const { error, value } = MealPrefsSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const JSON_SCHEMA = decideJSONSchema(
      value?.plan_type,
      value?.meals_frequency
    );

    const Prompt = `
      As an experienced diet planner, generate a personalized diet plan based on the following criteria:
      
      - **Dietary Preferences**: ${value.dietry_prefs}
      - **Goal**: ${value.goal}
      ${
        value.caloric_intake
          ? `- **Caloric Intake**: ${value.caloric_intake} calories`
          : ""
      }
    
      ${value.proteins ? `- **Protein**: ${value.proteins} grams` : ""}
      ${value.fats ? `- **Fats**: ${value.fats} grams` : ""}
      ${
        value.carbohydrates
          ? `- **Carbohydrates**: ${value.carbohydrates} grams`
          : ""
      }
      ${
        value.allergies_or_restrictions
          ? `- **Allergies or Restrictions**: ${value.allergies_or_restrictions}`
          : ""
      }
    
      - **Plan Type**: ${value.plan_type}
      - **Meals per Day**: ${value.meals_frequency}
    
      Provide the response in a RFC8259 compliant JSON format following this schema without deviation: ${JSON.stringify(
        JSON_SCHEMA
      )}
    `;

    const headers = {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    };

    const data = {
      model: MODEL,
      messages: [{ role: "user", content: Prompt }],
    };

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      data,
      { headers }
    );

    const cleanedRes = removeUnwantedChars(
      response.data.choices[0].message.content
    );

    return res.status(200).json({ response: JSON.parse(cleanedRes) });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  generateDietPlan,
};
