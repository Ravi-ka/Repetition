import ProductModel from "../models/product.model.js";

const productModel = new ProductModel();

export default class ProductController {
  getProducts = (req, res) => {
    
    const finalProducts = productModel.fetchProducts();
    console.log(finalProducts)
  };
}
