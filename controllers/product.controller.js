const Product = require('../models/product.model');

module.exports.index = async (req, res) => {
  const products = await Product.find();
  res.json(products);
}

module.exports.productDetail = async (req, res) => {
  const product = await Product.findOne({ slug: req.query.slug });
  res.json(product);
} 

module.exports.addProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
}
