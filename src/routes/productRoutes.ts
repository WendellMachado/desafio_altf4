import express from "express";
import ProductsController from "../controllers/productsController";


const productsController = new ProductsController();

const routes = express.Router();

routes.get("/", productsController.index);

routes.get("/:id", productsController.show);

routes.post("/", productsController.create);

routes.put("/:id", productsController.update);

routes.delete("/:id", productsController.delete);

export default routes;