const express = require('express');
const router = express.Router();
const { placeOrder, getOrderHistory } = require('../controllers/orderController');

router.post('/place', placeOrder);
router.get('/history', getOrderHistory);

module.exports = router;
