import axios from "axios";
import { sendMail } from "../utils/mailService";
import Weather from "../models/weatherModel";

const API_KEY = process.env.OPENWEATHER_API_KEY;

export const fetchWeather = async (city: string) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const response = await axios.get(url);
    const data = response.data;

    const weatherData = {
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      weather: data.weather[0].description,
    };

    const saved = await Weather.create(weatherData);

    // EMAIL ALERT CONDITION
    if (saved.temperature > 35) {
      const table = `
      <h2>High Temperature Alert</h2>
      <table border="1">
      <tr>
        <th>City</th>
        <th>Country</th>
        <th>Temperature</th>
        <th>Weather</th>
      </tr>
      <tr>
        <td>${saved.city}</td>
        <td>${saved.country}</td>
        <td>${saved.temperature}</td>
        <td>${saved.weather}</td>
      </tr>
      </table>
      `;

      //await sendMail(table);
    }

    return saved;
  } catch (error: any) {
    throw new Error("Failed to fetch weather data");
  }
};
export const getWeatherDashboard = async (city?: string) => {

  if (city) {

    return await Weather.findAll({
      where: { city },
      order: [["createdAt", "DESC"]],
    });

  }

  // Latest record per city
  const records = await Weather.findAll({
    attributes: ["city", "temperature", "weather", "createdAt"],
    order: [["createdAt", "DESC"]],
  });

  return records;
};