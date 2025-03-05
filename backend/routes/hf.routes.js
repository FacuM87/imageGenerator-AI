import { Router } from "express";
import { generateImage } from "../controllers/hf.controllers.js";

const router = Router()

router.post("/generate-image", generateImage)

export default router