import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });
import cors from "cors";
import connection from "./database/dbconnection.js";
import { errorMiddleware } from "./middleware/error.js";
import router from "./Routes/customerRoutes.js";
import customer from "./models/userModel.js";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));

connection();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

app.use("/api/v1/users", router);

app.use(errorMiddleware);
