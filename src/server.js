import dotenv from "dotenv";
import app from "./app.js";
import { sequelize } from "./models/index.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

try {
  await sequelize.authenticate();
  console.log("Database Connected");

  await sequelize.sync();
  console.log("Database sync successfully !.");


  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
} catch (error) {
  console.error("Database Error:", error);
}