import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import employeesRoute from "./Routes/employees.js";
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongoDB");
  } catch (err) {
    throw error;
  } 
};

mongoose.connection.on("disconnected", () => {
  console.log("connection to the database has been disconnected");
});


app.use(express.json());
app.use("/api/employee", employeesRoute);
app.listen(8000, () => {
  connect();
  console.log("BackEnd is live and running.");
});
