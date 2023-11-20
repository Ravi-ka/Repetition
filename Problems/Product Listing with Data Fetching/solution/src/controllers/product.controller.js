import { products } from "../assets/products.js";
import ProductModel from "../models/product.model.js";

const productModel = new ProductModel();

export default class ProductController {
  getProducts = (req, res) => {
    const productFinalList = productModel.fetchProducts();
    res.render('product',{products:products})
  };
}
