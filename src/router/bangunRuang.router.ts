import { Router } from "express";
import { tubeVolume,ballVolume,blockVolume,coneVolume,volumeCube } from "../controler/bangunRuang.controller";
import { validatetube, validateBall,validateBlock,validateCone,validationCube } from "../middleware/geometry.vaidate";

const router = Router()

router.post('/tube', [validatetube], tubeVolume)
router.post('/ball', [validateBall], ballVolume)
router.post('/block', [validateBlock], blockVolume)
router.post('/cone', [validateCone], coneVolume)
router.post('/cube', [validationCube], volumeCube)

export default router;
