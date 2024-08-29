import { Router } from "express";
import { circleArea, triangleArea } from "../controler/bangunDatar.controler";

const router = Router()

router.get('/circle', circleArea)
router.get('/triangle', triangleArea)                                                                                                                                                                                                                                           

export default router;