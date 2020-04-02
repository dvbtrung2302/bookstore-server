const express = require('express');
const controller = require('../controllers/product.controller');

var router = express.Router();

router.get('/', controller.index);

router.post('/', controller.addProduct);

module.exports = router;