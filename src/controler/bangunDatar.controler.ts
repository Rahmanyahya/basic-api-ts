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
       const a: number = Number(req.query.alas)
       const t: number = Number(req.query.tinggi)
       const result = 0.5 * a * t

       return res.status(200).json({
        message: "Area of Triangle",
        result: result
       })  
    } catch (error) {
        res.status(500).json(error)
    }
}

const countReactangelArea = (req: Request, res: Response) => {
  try {

    const p: number = Number(req.params.p)
    const l: number = Number(req.params.l)
    const result = p * l

    res.status(200).json({
      status: "succes",
      message: "area of ractangle",
      result: result
    })
  
  } catch (error) {
    res.status(500).json(error)    
  }
}

export {circleArea,triangleArea, countReactangelArea}

