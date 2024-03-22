const express = require('express');
const router = express.Router();
const { addToCart, getCart, updateCart, deleteFromCart } = require('../controllers/cartController');

router.post('/add', addToCart);
router.get('/getcartproducts', getCart);
// router.put('/update', updateCart);
// router.delete('/delete/:productId', deleteFromCart);

module.exports = router;
