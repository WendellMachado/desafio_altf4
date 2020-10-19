import express from "express";
import routes from "./routes/helloRoute";
import bodyParser from "body-parser";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use(routes);

app.listen(process.env.SERVER_PORT);
