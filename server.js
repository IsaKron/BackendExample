import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import taskRoutes from "./routes/tasks.js";
import { invalidRoute } from "./routes/invalidRoute.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_DB_URI = process.env.MONGO_DB_URI || "mongodb://localhost:27017";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/tasks", taskRoutes);

app.use("*", invalidRoute);

app.use(errorHandler);

mongoose
  .connect(MONGO_DB_URI)
  .then(() => {
    console.log(`Connection with mongoDB: SUCCESS ✅`);
    app.listen(PORT, () => {
      console.log(`Listening at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Connection with mongoDB: FAILED ⛔`, error);
  });
mongoose.connection.on(`error`, (error) => {
  console.error("Fehler bei der Verbindung zur Datenbank:", error);
});
