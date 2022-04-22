import express from "express";
import controllers from "./controller.js";

const router = express.Router();

router.get("/about", controllers.about);

router.get("/weather", controllers.getWeather);

export default router;
