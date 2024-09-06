import { Router } from "express";
import { circleArea, countReactangelArea, triangleArea } from "../controler/bangunDatar.controler";
import {validateTriangle,validateRectangle,validateCircle} from "../middleware/bangunDatar.validate"

const router = Router()

router.get('/circle',[validateCircle], circleArea)
router.get('/triangle',[validateTriangle], triangleArea) 
router.get('/rectangle/:p/:l',[validateRectangle],countReactangelArea)                                                                                                                                                                                                                                          

export default router;