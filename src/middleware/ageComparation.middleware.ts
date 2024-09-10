import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const personSchema = Joi.object({
    name: Joi.string().required(),
    dob: Joi.date().max(new Date())
})

const ageSchema = Joi.object({
 firstPerson: personSchema.required(),
 secondPerson: personSchema.required()
})

const validateAge = (req: Request, res: Response, next: NextFunction) => {
    const validation = ageSchema.validate(req.body)
    if (validation.error) return res.status(400).json({message: validation.error.details.map(item => item.message).join()})
        return next()
}

export {validateAge}
