import express, { Application, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import {errorHandler, notFoundHandler} from "./middlewares/errorHandler";

dotenv.config();


const app: Application = express();
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(notFoundHandler)
app.use(errorHandler)

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listeining to the server ${PORT}`);
});

export default app;
