import { Sequelize } from "sequelize";

const sequelize = new Sequelize("weatherdb", "postgres", "Password1#", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
