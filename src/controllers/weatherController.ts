import { Request, Response } from "express";
import { fetchWeather, getWeatherDashboard } from "../services/weatherService";

export const getWeather = async (req: Request, res: Response) => {
  try {
    const { city } = req.query;

    const data = await fetchWeather(city as string);

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching weather" });
  }
};

export const weatherDashboard = async (req: Request, res: Response) => {
  try {
    const { city } = req.query;

    const data = await getWeatherDashboard(city as string);

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error loading dashboard" });
  }
};
