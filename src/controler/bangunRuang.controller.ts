import { Request, Response } from "express";

const tubeVolume = (req: Request, res: Response) => {
  try {
    const r: number = Number(req.body.r)
    const t: number = Number(req.body.t)
    const volume = Math.PI * r * r * t

    return res.status(200).json({
      message: "Volume of Tube",
      volume: volume
    })

  } catch (error) {
    res.status(500).json(error)
  }
}

const coneVolume = (req: Request, res: Response) => {
  try {
    const r: number = Number(req.body.r)
    const t: number = Number(req.body.t)
    const volume = (Math.PI * r * r * t) / 3;
    return res.status(200).json({
      message: "Volume of Cone",
      volume: volume
    })
  } catch (error) {
    res.status(500).json(error)
  }
}

const blockVolume = (req: Request, res: Response) => {
  try {
    const p: number = Number(req.body.p)
    const l: number = Number(req.body.l)
    const t: number = Number(req.body.t)
    const result = p * l * t

    return res.status(200).json({
      message: "Volume of block",
      volume: result
    })
  } catch (error) {
    res.status(400).json(error)
  }
}

const ballVolume = (req: Request, res: Response) => {
  try {
    const r: number = Number(req.body.r)
    const result = (Math.PI * 4 * r * r * r) / 3
    return res.status(200).json({
      message: "Volume of ball",
      Volume: result
    })
  } catch (error) {
    res.status(400).json(error)
  }
}

const volumeCube = (res: Response, req: Request) => {
  try {
    const s: number = Number(req.body.s);
    const result = s * s * s
    return res.status(200).json({
      message: "Volume of Cube",
      Volume: result
    })
  } catch (error) {
    return res.status(400).json(error)
  }
}

export { tubeVolume, volumeCube, blockVolume, ballVolume, coneVolume }
