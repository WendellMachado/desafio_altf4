import ProductsRepository from '../repositories/productsRepository';
import { Request, Response } from "express";
import Product from '../models/productModel';

const productsRepository = new ProductsRepository();

class ProductsController {

  async index(req: Request, res: Response) {

    const data = await productsRepository.index();

    res.status(200).json({
      success: true,
      data,
    });
  }

  async show(req: Request, res: Response) {
    const {id} = req.params;
    const data = await productsRepository.show(Number(id));

    if(!data)
    {
      return res.status(400).json({
        error: true,
        message: "id not found"
      });
    }

    return res.status(200).json({
      success: true,
      data,
    });
  }

  async create(req: Request, res: Response) {

    const {
      name,
      description,
    } = req.body;

    const product = new Product(name, description);

    const data = await productsRepository.create(product);

    if(!data){
      return res.status(400).json({
        error: true,
        message: "malformed params"
      });
    }

    res.status(200).json({
      success: true,
      data,
    });
  }

  async update(req: Request, res: Response) {

    const {id} = req.params;

    const {
      name,
      description,
    } = req.body;

    const product = new Product(name, description);

    const data = await productsRepository.update(Number(id), product);

    if(!data){
      return res.status(400).json({
        error: true,
        message: "malformed params"
      });
    }

    res.status(200).json({
      success: true,
      data,
    });
  }

  async delete(req: Request, res: Response) {

    const {id} = req.params;

    const data = await productsRepository.delete(Number(id));

    if(!data){
      return res.status(400).json({
        error: true,
        message: "id not found"
      });
    }

    res.status(200).json({
      success: true,
      data,
    });
  }
}

export default ProductsController;
