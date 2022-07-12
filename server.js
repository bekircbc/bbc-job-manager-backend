import express from "express";
import { JobSource } from "./models/JobSource";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/bbc-job-manager";

mongoose.connect(MONGODB_URI, (err) => {
  if (err) {
    console.log({
      error: "Cannot connect to MongoDB database.",
      err: `"${err}"`,
    });
  }
});

const app = express();
const port = process.env.PORT || 30445;

app.get("/", (req, res) => {
  res.send("<h1>Job Manager API</h1>");
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
