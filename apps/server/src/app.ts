import "reflect-metadata";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import recordingRouter from "./router/Recording.router";
import dotenv from "dotenv";
import { appDataSource } from "@sniffer/infrastructure";

dotenv.config();

export const ENV = {
  S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,
  AWS_REGION: process.env.AWS_REGION,
};

appDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

const PORT = 4000;
const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));

app.use("/recording", recordingRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
