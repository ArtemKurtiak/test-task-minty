import Joi from 'joi';

export const getProductsByCategoriesValidator = Joi.object({
  category: Joi
    .string()
    .required()
    .allow('')
});
