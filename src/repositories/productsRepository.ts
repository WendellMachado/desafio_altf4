import knex from "../database/connection";
import Product from '../models/productModel';

class ProductsRepository {
    async index() {
      const products = await knex("products").select("*");
  
      const serializedItems = products.map((product) => {
        return {
          id: product.id,
          name: product.name,
          description: product.description
        };
      });

      return serializedItems;
    }

    async show(id: number) {

      const product = await knex("products").where("id", id).first();

      return product;
    }

    async create(product: Product) {

      const data = await knex("products").insert(product);

      return product;
    }

    async update(id: number, product: Product) {
      const data = await knex("products").update(product).where("id", id);

      return product;
    }

    async delete(id: number) {
      const data = await knex("products").delete().where("id", id);

      return data;
    }
}

export default ProductsRepository;