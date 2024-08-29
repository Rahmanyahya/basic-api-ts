import { Request, Response } from "express"

const circleArea = (req: Request, res: Response) => {
  try {
    const r: number = Number(req.query.r) /** To convert numerict value */
    const luasArea = Math.PI * r * r;

    return res.status(200).json({
        message: "Area of circle has counted",
        luas: luasArea
    })
  } catch (error) {
    res.status(500).json(error)
  }
}

const triangleArea = (req: Request, res: Response) => {
    try {
       const alas: number = Number(req.query.alas)
       const tinggi: number = Number(req.query.tinggi)
       const result = 0.5 * alas * tinggi

       return res.status(200).json({
        message: "Area of Triangle",
        result: result
       })  
    } catch (error) {
        res.status(500).json(error)
    }
}

export {circleArea,triangleArea}