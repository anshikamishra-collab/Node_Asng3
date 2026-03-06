import { DataTypes, Model } from "sequelize";
import sequelize from "../config/pgConfig";

class Weather extends Model {
  public id!: number;
  public city!: string;
  public country!: string;
  public temperature!: number;
  public weather!: string;
}

Weather.init(
  {
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
    },
    temperature: {
      type: DataTypes.FLOAT,
    },
    weather: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "Weather",
  },
);

export default Weather;
