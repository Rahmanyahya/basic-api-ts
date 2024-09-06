import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const shapeTriangleSchema = Joi.object({
    a: Joi.number().min(1).required(),
    t: Joi.number().min(1).required(),
})

const circleSchema = Joi.object({
    r: Joi.number().min(1).required()
})

const rectangleSchema = Joi.object({
    p: Joi.number().min(1).required(),
    l: Joi.number().min(1).required()
})

const validateTriangle = (req: Request, res: Response, next: NextFunction) => {
    const validation = shapeTriangleSchema.validate(req.query)
    if (validation.error) return res.status(400).json({message: validation.error.details.map(item => item.message).join()})
        return next()
}

const validateCircle = (req: Request, res: Response, next: NextFunction) => {
    const validation = circleSchema.validate(req.query)
    if (validation.error) return res.status(400).json({message: validation.error.details.map(item => item.message).join()})
        return next()
}

const validateRectangle = (req: Request, res: Response, next: NextFunction) => {
    const validation = rectangleSchema.validate(req.params)
    if (validation.error) return res.status(400).json({message: validation.error.details.map(item => item.message).join()})
        return next()
}


export {validateTriangle,validateRectangle,validateCircle}

