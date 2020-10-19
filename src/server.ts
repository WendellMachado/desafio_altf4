import express from "express";
import routes from "./routes/helloRoute";
import productRoutes from "./routes/productRoutes";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use(routes);
app.use("/products", productRoutes);

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.listen(process.env.SERVER_PORT);
