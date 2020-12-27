const express = require('express');
const controller = require('../controllers/order.controller');
const middleware = require('../middlewares/token.middleware');

const router = express.Router();

router.get('/', middleware.verifyToken, controller.index);

router.get('/remove-all', middleware.verifyToken, controller.removeAll)

module.exports = router;