import express from "express";
import { getWeather, weatherDashboard } from "../controllers/weatherController";

const router = express.Router();

router.get("/weather", getWeather);
router.get("/dashboard", weatherDashboard);

export default router;