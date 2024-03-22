const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const shortid = require('shortid');
const { getAllProducts, getProductDetailsById, createProduct, searchProductByName, getProductByFilter, deleteProductById } = require('../controllers/productController');

// Multer setup for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(path.dirname(__dirname), 'uploads'));
    },
    filename: function (req, file, cb) {
        cb(null, shortid.generate() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post('/create', upload.array('productPictures'), createProduct);
router.get('/getallproducts', getAllProducts);
router.get('/search', searchProductByName);
router.get('/filter', getProductByFilter);
router.get('/:productId', getProductDetailsById);
router.delete('/:productId', deleteProductById);

module.exports = router;
