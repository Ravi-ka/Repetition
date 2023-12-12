import { products } from "../assets/products.js";

export default class ProductModel {
  fetchProducts = (req, res) => {
    return products;
  };
}
