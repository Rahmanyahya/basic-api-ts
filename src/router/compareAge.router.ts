import { Router } from "express";
import { ageComparation } from "../controler/compare.controller";
import { validateAge } from "../middleware/ageComparation.middleware";

const router = Router()

router.post('/age',[validateAge], ageComparation)

export default router