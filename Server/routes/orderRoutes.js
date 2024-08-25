
const express = require('express');
const { addOrder, getUserOrders } = require('../controllers/orderController');
const router = express.Router();

router.post('/PlaceOrder', addOrder);

router.get('/getmyOrders', getUserOrders);
module.exports = router;