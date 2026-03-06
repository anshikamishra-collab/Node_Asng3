import dotenv from "dotenv";
dotenv.config();

import express from "express";
import weatherRoutes from "./routes/weatherRoutes";
import sequelize from "./config/pgConfig";

const app = express();

app.use(express.json());

app.use("/", weatherRoutes);

const PORT = 3000;

sequelize.sync().then(() => {
  console.log("Database synced");

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
