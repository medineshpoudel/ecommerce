import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listeining to the server ${PORT}`);
});

export default app;
