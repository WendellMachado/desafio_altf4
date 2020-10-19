import Knex from "knex";
import Product from '../../models/productModel';

const xburguer = new Product(
  'xburguer',
  'pão, carne e queijo'
);

const xsalada = new Product(
  'xsalada',
  'pão, carne, queijo, alface e tomate'
);

const xegg = new Product(
  'xegg',
  'pão, carne, queijo e ovo'
);

const xbacon = new Product(
  'xbacon',
  'pão, carne, queijo e bacon'
);

const xtudo = new Product(
  'xtudo',
  'pão, carne, queijo, bacon, ovo, alface e tomate'
);

const productsSeed = [
  xburguer,
  xsalada,
  xegg,
  xbacon,
  xtudo
]

export async function seed(knex: Knex) {
  await knex("products").insert(productsSeed);
}
