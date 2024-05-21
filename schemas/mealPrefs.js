const Joi = require("joi");
const { DIETRY_PREFS, PLAN_TYPE, GOALS } = require("../constants/constants");

const MealPrefsSchema = Joi.object({
  dietry_prefs: Joi.string()
    .valid(...DIETRY_PREFS)
    .insensitive()
    .required(),
  goal: Joi.string()
    .valid(...GOALS)
    .insensitive()
    .required(),
  caloric_intake: Joi.number().integer(),
  proteins: Joi.number().integer(),
  carbohydrates: Joi.number().integer(),
  fats: Joi.number().integer(),
  allergies_or_restrictions: Joi.string().insensitive(),
  plan_type: Joi.string()
    .valid(...PLAN_TYPE)
    .insensitive()
    .required(),
  meals_frequency: Joi.number().integer().min(0).max(5).default(3),
});

module.exports = { MealPrefsSchema };
