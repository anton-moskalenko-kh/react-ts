import Joi from "joi";

export const postValidator = Joi.object({
    title: Joi.string().pattern(/^[a-zA-Z\s\.,!?;:'"]+$/).required()
        .messages({
            "string.pattern.base": "Numbers are not allowed",
            "string.empty": "Required field"
        }),
    body: Joi.string().pattern(/^[^\d]+$/).required()
        .messages({
            "string.pattern.base": "Numbers are not allowed",
            "string.empty": "Required field",
        }),
    userId: Joi.number().min(1).max(10).required()
        .messages({
            "number.min": "1 is a minimum value",
            "number.max": "10 is a maximum value",
            // "number.precision": "Required field"
        })


})