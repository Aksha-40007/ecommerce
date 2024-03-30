const express = require('express');
const router = express.Router();
const { addToCart, getCart, updateCart } = require('../controllers/cartController');

router.post('/add', addToCart);
router.put('/update', updateCart);
router.get('/getcartproducts', getCart);

module.exports = router;
