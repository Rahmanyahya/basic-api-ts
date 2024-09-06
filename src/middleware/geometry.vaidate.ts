/** this file use to
 * validate req data for geometry
 * such as tube, cube, ball, etc.
 */

import Joi from "joi";
import { Request, Response, NextFunction, request } from "express";


/** create schema or rules to validate req for tube*/
const tubeSchema = Joi.object({
  r: Joi.number().min(1).required(),
  t: Joi.number().min(1).required()
})

const coneSchema = Joi.object({
  r: Joi.number().min(1).required(),
  t: Joi.number().min(1).required()
})

const blockSchema = Joi.object({
  p: Joi.number().min(1).required(),
  l: Joi.number().min(1).required(),
  t: Joi.number().min(1).required()
})

const ballSchema = Joi.object({
  r: Joi.number().min(1).required()
})

const cuberSchema = Joi.object({
  s: Joi.number().min(1).required()
})

/** create function to validate request */
const validatetube = (req: Request, res: Response, next: NextFunction) => {
  /** check an error of valiation */
  const validation = tubeSchema.validate(req.body)
  if (validation.error) {
    return res.status(400).json({
      message: validation
        .error
        .details
        .map(item => item.message).join()
    })
  }
  return next()
}

const validateCone = (req: Request, res: Response, next: NextFunction) => {
  const validation = coneSchema.validate(req.body)
  if (validation.error) return res.status(400).json({ message: validation.error.details.map(item => item.message).join() })
  return next()
}

const validateBlock = (req: Request, res: Response, next: NextFunction) => {
  const validation = blockSchema.validate(req.body)
  if (validation.error) return res.status(400).json({message: validation.error.details.map(items => items.message).join()})
    return next()
}

const validateBall = (req: Request, res: Response, next:NextFunction) => {
  const validate = ballSchema.validate(req.body)
  if (validate.error) return res.status(400).json({message: validate.error.details.map(item => item.message).join()})
    return next()
}

const validationCube = (req: Request, res: Response, next: NextFunction) => {
  const validate = cuberSchema.validate(req.body)
  if (validate.error) return res.status(400).json({message: validate.error.details.map(item => item.message).join()})
    return next()
}


export { validatetube, validateBall, validateBlock, validateCone, validationCube }
