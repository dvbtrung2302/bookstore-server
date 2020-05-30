const Order = require('../models/order.model');
const User = require('../models/user.model');
const Product = require('../models/product.model');

module.exports.index = async (req, res) => {
  const orders = await Order.find({ userId: req.user._id });
  try {
    res.status(200).json(orders);
  } catch (err) {
    res.status(400).send(err);
  }
}
