const Product = require('../models/Product');
const slugify = require('slugify');
const { errorHandler } = require('../utils/errorHandler');
const { HEADPHONE_TYPES, COMPANIES, COLORS, PRICE_RANGES } = require('../utils/constant');

const handleError = (res, statusCode, message) => {
    return res.status(statusCode).json({ error: message });
};

// Create Product
exports.createProduct = async (req, res) => {
    try {
        const { name, price, quantity,summary, description, color,company,headphonetype,rating } = req.body;
        const productPictures = req.files.map(file => ({ img: file.filename }));

        const product = new Product({
            name,
            slug: slugify(name),
            price,
            quantity,
            description,
            productPictures,
            summary,
            availability: quantity > 0,
            color,
            company,
            headphonetype,
        });

        await product.save();
        return res.status(201).json({ product });
    } catch (error) {
        errorHandler(res, 401, error.message);
    }
};

// Get Product Details by ID
exports.getProductDetailsById = async (req, res) => {
    try {
        const { productId } = req.params;
        if (!productId) {
            return handleError(res, 400, "Please select product to get details");
        }
        const product = await Product.findOne({ _id: productId });
        if (!product) {
            return handleError(res, 404, "Product does not exists");
        }
        return res.status(200).json({ product });
    } catch (error) {
        errorHandler(res, 400, error.message);
    }
};

// Search Product by Name
exports.searchProductByName = async (req, res) => {
    try {
        const productName = req.query.name;
        const regex = new RegExp(productName, 'i');
        const products = await Product.find({ name: regex });
        if (!products || products.length === 0) {
            return handleError(res, 404, 'No products found with that name. Please enter valid name');
        }
        return res.status(200).json({ products });
    } catch (error) {
        errorHandler(res, 500, error.message);
    }
};

// Get Products by Filter
exports.getProductByFilter = async (req, res) => {
    try {
        const { headphonetype, price, color, company, sortby } = req.query;
        const filter = {};

        if (headphonetype && HEADPHONE_TYPES.includes(headphonetype)) {
            filter.headphonetype = headphonetype;
        }
        if (price) {
            // Find the corresponding price range based on the provided label
            const priceRange = PRICE_RANGES.find(range => range.label === price);
            if (priceRange) {
                // Filter products where the price falls within the predefined range
                filter.price = { $gte: priceRange.min, $lte: priceRange.max };
            } else {
                // Handle error for invalid price range label
                throw new Error('Invalid price range');
            }
        }
        if (color && COLORS.includes(color)) {
            filter.color = color;
        }
        if (company && COMPANIES.includes(company)) {
            filter.company = company;
        }

        let sortCriteria = {};
        if (sortby) {
            if (sortby === 'LowToHigh') {
                sortCriteria.price = 1;
            } else if (sortby === 'HighToLow') {
                sortCriteria.price = -1;
            } else if (sortby === 'AZ') {
                sortCriteria.company = 1;
            } else if (sortby === 'ZA') {
                sortCriteria.company = -1;
            }
        }

        const products = await Product.find(filter).sort(sortCriteria);
        return res.status(200).json({ products });
    } catch (error) {
        errorHandler(res, 500, error.message);
    }
};

// Get All Products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        return res.status(200).json({ products });
    } catch (error) {
        errorHandler(res, 500, error.message);
    }
};

// Delete Product by ID
exports.deleteProductById = async (req, res) => {
    try {
        const { productId } = req.params;
        if (!productId) {
            return handleError(res, 400, "Please select product");
        }
        const result = await Product.deleteOne({ _id: productId });
        return res.status(202).json({ result });
    } catch (error) {
        errorHandler(res, 400, error.message);
    }
};